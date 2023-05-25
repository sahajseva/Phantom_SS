import { IResourceItem } from "@contexts/resource";
import capitalize from "lodash/capitalize";
import { userFriendlyResourceName } from "../userFriendlyResourceName";

/**
 * Generates document title for the given resource and action.
 */
export function generateDefaultDocumentTitle(
    translate: {
        (
            key: string,
            options?: any,
            defaultMessage?: string | undefined,
        ): string;
        (key: string, defaultMessage?: string | undefined): string;
    },
    resource?: IResourceItem,
    action?: string,
    id?: string,
) {
    const actionPrefixMatcher = {
        create: "Create new ",
        edit: `#${id ?? ""} Edit `,
        show: `#${id ?? ""} Show `,
        list: "",
    };

    const resourceName = userFriendlyResourceName(
        resource?.name,
        action === "list" ? "plural" : "singular",
    );

    const defaultTitle = translate("documentTitle.default", "refine");
    const suffix = translate("documentTitle.suffix", " | refine");
    let autoGeneratedTitle = defaultTitle;

    if (action && resource?.name) {
        autoGeneratedTitle = translate(
            `documentTitle.${resource.name}.${action}`,
            { id },
            `${
                actionPrefixMatcher[action as keyof typeof actionPrefixMatcher]
            }${capitalize(resourceName)}${suffix}`,
        );
    }

    return autoGeneratedTitle;
}
