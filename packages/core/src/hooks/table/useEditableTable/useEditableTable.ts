import { useTable, useForm } from "@hooks";
import { useTableProps } from "../useTable";
import { BaseRecord, HttpError } from "../../../interfaces";
import { useFormProps } from "../../form/useForm";

type useEditableTableProps<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {}
> = useTableProps & useFormProps<TData, TError, TVariables>;

export const useEditableTable = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {}
>(
    props: useEditableTableProps<TData, TError, TVariables> = {},
) => {
    const table = useTable<TData>({ ...props });
    const edit = useForm<TData, TError, TVariables>({
        ...props,
        action: "edit",
    });

    const { form, editId, setEditId, formLoading } = edit;

    const saveButtonProps = {
        onClick: () => form.submit(),
        disabled: formLoading,
    };

    const cancelButtonProps = {
        onClick: () => setEditId && setEditId(undefined),
    };

    const editButtonProps = (id: string | number) => {
        return {
            onClick: () => setEditId && setEditId(id),
        };
    };

    const isEditing = (id: string | number) => id === editId;

    return {
        ...table,
        ...edit,
        saveButtonProps,
        cancelButtonProps,
        editButtonProps,
        isEditing,
    };
};
