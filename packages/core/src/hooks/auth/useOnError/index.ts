import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { useAuthBindingsContext, useLegacyAuthContext } from "@contexts/auth";
import { OnErrorResponse } from "../../../interfaces";
import { useLogout, useNavigation } from "@hooks";

export type UseOnErrorLegacyProps = {
    v3LegacyAuthProviderCompatible: true;
};

export type UseOnErrorProps = {
    v3LegacyAuthProviderCompatible?: false;
};

export type UseOnErrorCombinedProps = {
    v3LegacyAuthProviderCompatible: boolean;
};

export type UseOnErrorLegacyReturnType = UseMutationResult<
    void,
    string | undefined,
    any,
    unknown
>;

export type UseOnErrorReturnType = UseMutationResult<
    OnErrorResponse,
    unknown,
    unknown,
    unknown
>;
export type UseOnErrorCombinedReturnType = UseMutationResult<
    OnErrorResponse | void,
    unknown,
    unknown,
    unknown
>;

export function useOnError(
    props: UseOnErrorLegacyProps,
): UseOnErrorLegacyReturnType;

export function useOnError(props?: UseOnErrorProps): UseOnErrorReturnType;

export function useOnError(
    props?: UseOnErrorCombinedProps,
): UseOnErrorCombinedReturnType;

/**
 * `useOnError` calls the `checkError` method from the {@link https://refine.dev/docs/core/providers/auth-provider `authProvider`} under the hood.
 *
 * @see {@link https://refine.dev/docs/core/hooks/auth/useCheckError} for more details.
 *
 */
export function useOnError({
    v3LegacyAuthProviderCompatible = false,
}: UseOnErrorProps | UseOnErrorLegacyProps = {}):
    | UseOnErrorReturnType
    | UseOnErrorLegacyReturnType {
    const { replace } = useNavigation();
    const { checkError: legacyCheckErrorFromContext } = useLegacyAuthContext();
    const { onError: onErrorFromContext } = useAuthBindingsContext();

    const { mutate: legacyLogout } = useLogout({
        v3LegacyAuthProviderCompatible: Boolean(v3LegacyAuthProviderCompatible),
    });
    const { mutate: logout } = useLogout({
        v3LegacyAuthProviderCompatible: Boolean(v3LegacyAuthProviderCompatible),
    });

    const queryResponse = useMutation(["useOnError"], onErrorFromContext, {
        onSuccess: ({ logout: shouldLogout, redirectTo }) => {
            if (shouldLogout) {
                logout({ redirectPath: redirectTo });
                return;
            }

            if (redirectTo) {
                replace(redirectTo);
                return;
            }
        },
    });

    const legacyQueryResponse = useMutation(
        ["useOnError"],
        legacyCheckErrorFromContext,
        {
            onError: (redirectPath?: string) => {
                legacyLogout({ redirectPath });
            },
        },
    );

    return v3LegacyAuthProviderCompatible ? legacyQueryResponse : queryResponse;
}

/**
 * @deprecated `useCheckError` is deprecated with refine@4, use `useOnError` instead, however, we still support `useCheckError` for backward compatibility.
 */
export const useCheckError = useOnError;
