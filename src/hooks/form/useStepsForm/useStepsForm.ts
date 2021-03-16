import {
    useStepsForm as useStepsFormSF,
    UseStepsFormConfig,
} from "sunflower-antd";

import { useForm, useEditFormProps, useCreateFormProps } from "@hooks";

export type useStepsFormProps = (
    props: (useCreateFormProps | useEditFormProps) & UseStepsFormConfig,
) => ReturnType<typeof useStepsFormSF>;

export const useStepsForm: useStepsFormProps = (props /* config */) => {
    console.log("props: ", props);
    const form = useForm({ ...props });

    const stepsPropsSunflower = useStepsFormSF({
        ...props,
        form: form.form,
        submit: (values) => {
            form.formProps?.onFinish(values as any);
        },
    });

    return {
        ...stepsPropsSunflower,
    };
};
