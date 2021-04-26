import { useCallback } from "react";
import { IResourceItem } from "@contexts/resource";
import { useNavigation } from "@hooks/navigation";

export const useRedirectionAfterSubmission = () => {
    const { show, edit, list } = useNavigation();

    const handleSubmitWithRedirect = useCallback(
        ({
            redirect,
            resource,
            id,
        }: {
            redirect: "show" | "list" | "edit" | false;
            resource: IResourceItem;
            id?: string | number;
        }) => {
            if (redirect && resource.route) {
                if (resource.canShow && redirect === "show" && id) {
                    return show(resource.route, "push", id);
                }

                if (resource.canEdit && redirect === "edit" && id) {
                    return edit(resource.route, "push", id);
                }

                return list(resource.route, "push");
            } else {
                return;
            }
        },
        [],
    );

    return handleSubmitWithRedirect;
};
