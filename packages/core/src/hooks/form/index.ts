import React from "react";
import warnOnce from "warn-once";
import debounce from "lodash/debounce";

import {
  useId,
  useMeta,
  useOne,
  useCreate,
  useUpdate,
  useResource,
  useInvalidate,
  useMutationMode,
  useRefineOptions,
  useLoadingOvertime,
  useWarnAboutChange,
  useRedirectionAfterSubmission,
} from "@hooks";

import {
  redirectPage,
  deferExecution,
  pickNotDeprecated,
} from "@definitions/helpers";

import type { BaseRecord, HttpError, BaseKey } from "../../interfaces";
import type { UpdateResponse, CreateResponse } from "../../interfaces";
import type { UpdateParams } from "../data/useUpdate";
import type { UseCreateParams } from "../data/useCreate";
import type { UseFormProps, UseFormReturnType } from "./types";

/**
 * This hook orchestrates Refine's data hooks to create, edit, and clone data. It also provides a set of features to make it easier for users to implement their real world needs and handle edge cases such as redirects, invalidation, auto-save and more.
 *
 * @see {@link https://refine.dev/docs/data/hooks/use-form} for more details.
 *
 * @typeParam TQueryFnData - Result data returned by the query function. Extends {@link https://refine.dev/docs/core/interface-references/#baserecord `BaseRecord`}
 * @typeParam TError - Custom error object that extends {@link https://refine.dev/docs/core/interface-references/#httperror `HttpError`}
 * @typeParam TVariables - Values for params. default `{}`
 * @typeParam TData - Result data returned by the `select` function. Extends {@link https://refine.dev/docs/core/interface-references/#baserecord `BaseRecord`}. Defaults to `TQueryFnData`
 * @typeParam TResponse - Result data returned by the mutation function. Extends {@link https://refine.dev/docs/core/interface-references/#baserecord `BaseRecord`}. Defaults to `TData`
 * @typeParam TResponseError - Custom error object that extends {@link https://refine.dev/docs/core/interface-references/#httperror `HttpError`}. Defaults to `TError`
 *
 */
export const useForm = <
  TQueryFnData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
  TData extends BaseRecord = TQueryFnData,
  TResponse extends BaseRecord = TData,
  TResponseError extends HttpError = TError,
>(
  props: UseFormProps<
    TQueryFnData,
    TError,
    TVariables,
    TData,
    TResponse,
    TResponseError
  > = {},
): UseFormReturnType<
  TQueryFnData,
  TError,
  TVariables,
  TData,
  TResponse,
  TResponseError
> => {
  const getMeta = useMeta();
  const invalidate = useInvalidate();
  const { redirect: defaultRedirect } = useRefineOptions();
  const { mutationMode: defaultMutationMode } = useMutationMode();

  const { setWarnWhen } = useWarnAboutChange();
  const handleSubmitWithRedirect = useRedirectionAfterSubmission();

  const pickedMeta = pickNotDeprecated(props.meta, props.metaData);
  const mutationMode = props.mutationMode ?? defaultMutationMode;

  const {
    resource,
    action: routeAction,
    identifier,
  } = useResource(props.resource);

  const [autosaved, setAutosaved] = React.useState(false);

  const [id, setId] = useId({ id: props.id, resource: props.resource });

  const action = (() => {
    // if action is provided from props, use it
    if (props.action) return props.action;
    // fallback to create if action is not edit or clone
    if (routeAction !== "edit" && routeAction !== "clone") return "create";
    // otherwise use the route action
    return routeAction;
  })();

  const isEdit = action === "edit";
  const isClone = action === "clone";
  const isCreate = action === "create";

  const combinedMeta = getMeta({
    resource,
    meta: pickedMeta,
  });

  const idRequired = (isEdit || isClone) && Boolean(props.resource);
  const idHandled = typeof props.id !== "undefined";
  const idDismissed = props.queryOptions?.enabled === false;

  /**
   * When a custom resource is provided through props, `id` will not be inferred from the URL to avoid any potential faulty requests.
   * In this case, `id` is required to be passed through props.
   * If `id` is not handled, a warning will be thrown in development mode.
   */
  warnOnce(
    idRequired && !idHandled && !idDismissed,
    idWarningMessage(action, identifier, id),
  );

  /**
   * Target action to redirect after form submission.
   */
  const redirectAction = redirectPage({
    redirectFromProps: props.redirect,
    action,
    redirectOptions: defaultRedirect,
  });

  /**
   * Redirection function to be used in internal redirects and to be provided to the user.
   */
  const redirect: UseFormReturnType["redirect"] = (
    redirect = isEdit ? "list" : "edit",
    redirectId = id,
    routeParams = {},
  ) => {
    handleSubmitWithRedirect({
      redirect: redirect,
      resource,
      id: redirectId,
      meta: { ...pickedMeta, ...routeParams },
    });
  };

  const queryResult = useOne<TQueryFnData, TError, TData>({
    resource: identifier,
    id,
    queryOptions: {
      // Only enable the query if it's not a create action and the `id` is defined
      enabled: !isCreate && id !== undefined,
      ...props.queryOptions,
    },
    liveMode: props.liveMode,
    onLiveEvent: props.onLiveEvent,
    liveParams: props.liveParams,
    meta: { ...combinedMeta, ...props.queryMeta },
    dataProviderName: props.dataProviderName,
  });

  const createMutation = useCreate<TResponse, TResponseError, TVariables>({
    mutationOptions: props.createMutationOptions,
  });

  const updateMutation = useUpdate<TResponse, TResponseError, TVariables>({
    mutationOptions: props.updateMutationOptions,
  });

  const mutationResult = isEdit ? updateMutation : createMutation;
  const isMutationLoading = mutationResult.isLoading;
  const formLoading = isMutationLoading || queryResult.isFetching;

  const { elapsedTime } = useLoadingOvertime({
    isLoading: formLoading,
    interval: props.overtimeOptions?.interval,
    onInterval: props.overtimeOptions?.onInterval,
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: This is a controlled unmounting effect.
  React.useEffect(() => {
    // After `autosaved` is set to `true`, it won't be set to `false` again.
    // Therefore, the `invalidate` function will be called only once at the end of the hooks lifecycle.
    return () => {
      if (props.autoSave?.invalidateOnUnmount && autosaved) {
        invalidate({
          id,
          invalidates: props.invalidates || ["list", "many", "detail"],
          dataProviderName: props.dataProviderName,
          resource: identifier,
        });
      }
    };
  }, [props.autoSave?.invalidateOnUnmount, autosaved]);

  const submit = async (values: TVariables, isAutosave = false) => {
    const isPessimistic = mutationMode === "pessimistic";

    // Disable warning trigger when the form is being submitted
    setWarnWhen(false);

    // Redirect after a successful form submission
    const onSuccessRedirect = (id?: BaseKey) => redirect(redirectAction, id);

    const submissionPromise = new Promise<
      // biome-ignore lint/suspicious/noConfusingVoidType: Void is an expected case for this promise.
      CreateResponse<TResponse> | UpdateResponse<TResponse> | void
    >((resolve, reject) => {
      if (!isPessimistic && !isAutosave) {
        // If the mutation mode is not pessimistic, handle the redirect immediately in an async manner
        // `setWarnWhen` blocks the redirects until set to `false`
        // If redirect is done before the value is properly set, it will be blocked.
        // We're deferring the execution of the redirect to ensure that the value is set properly.
        deferExecution(() => onSuccessRedirect());
        // Resolve the promise immediately
        resolve();
      }

      // Reject the mutation if the resource is not defined
      if (!resource) return reject(missingResourceError);
      // Reject the mutation if the `id` is not defined in edit action
      if (isEdit && !id) return reject(missingIdError);
      // Reject the mutation if there's no `values` passed
      if (!values) return reject(missingValuesError);

      const variables:
        | UpdateParams<TResponse, TResponseError, TVariables>
        | UseCreateParams<TResponse, TResponseError, TVariables> = {
        values,
        resource: identifier ?? resource.name,
        meta: { ...combinedMeta, ...props.mutationMeta },
        metaData: { ...combinedMeta, ...props.mutationMeta },
        dataProviderName: props.dataProviderName,
        invalidates: isAutosave ? [] : props.invalidates,
        successNotification: isAutosave ? false : props.successNotification,
        errorNotification: isAutosave ? false : props.errorNotification,
        // Update specific variables
        ...(isEdit
          ? {
              id: id ?? "",
              mutationMode,
              undoableTimeout: props.undoableTimeout,
              optimisticUpdateMap: props.optimisticUpdateMap,
            }
          : {}),
      };

      const { mutateAsync } = isEdit ? updateMutation : createMutation;

      /**
       * biome-ignore lint/suspicious/noExplicitAny: Validity of the `variables` is checked above.
       * For sake of having a single function call, we are using `any` here.
       * Appropriate variables will be constructed based on the `action` and auto-save status.
       * Then, the `mutateAsync` function will be called with the constructed variables.
       */
      mutateAsync(variables as any, {
        // Call user-defined `onMutationSuccess` and `onMutationError` callbacks if provided
        // These callbacks will not have an effect on the submission promise
        onSuccess: (data, _, context) => {
          props.onMutationSuccess?.(data, values, context, isAutosave);
        },
        onError: (error: TResponseError, _, context) => {
          props.onMutationError?.(error, values, context, isAutosave);
        },
      })
        // If the mutation mode is pessimistic, resolve the promise after the mutation is succeeded
        .then((data) => {
          if (isPessimistic && !isAutosave) {
            deferExecution(() => onSuccessRedirect(data?.data?.id));
          }
          if (isAutosave) {
            setAutosaved(true);
          }
          resolve(data);
        })
        // If the mutation mode is pessimistic, reject the promise after the mutation is failed
        .catch(reject);
    });

    return submissionPromise;
  };

  const submitAutoSave = debounce(
    (values: TVariables) => submit(values, true),
    props.autoSave?.debounce || 1000,
  ) as typeof submit;

  const overtime = {
    elapsedTime,
  };

  const autoSaveProps = {
    status: updateMutation.status,
    data: updateMutation.data,
    error: updateMutation.error,
  };

  const deprecatedValues = {
    onFinish: submit,
    onFinishAutoSave: submitAutoSave,
  };

  return {
    submit,
    submitAutoSave,
    formLoading,
    mutationResult,
    queryResult,
    autoSaveProps,
    id,
    setId,
    redirect,
    overtime,
    ...deprecatedValues,
  };
};

const missingResourceError = new Error(
  "[useForm]: `resource` is not defined or not matched but is required",
);

const missingIdError = new Error(
  "[useForm]: `id` is not defined in edit action but is required",
);

const missingValuesError = new Error(
  "[useForm]: `values` is not provided but is required",
);

const idWarningMessage = (action?: string, identifier?: string, id?: BaseKey) =>
  `[useForm]: action: "${action}", resource: "${identifier}", id: ${id}

If you don't use the \`setId\` method to set the \`id\`, you should pass the \`id\` prop to \`useForm\`. Otherwise, \`useForm\` will not be able to infer the \`id\` from the current URL with custom resource provided.

See https://refine.dev/docs/data/hooks/use-form/#id-`;
