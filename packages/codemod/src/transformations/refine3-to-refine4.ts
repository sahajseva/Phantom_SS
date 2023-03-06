import { API, FileInfo } from "jscodeshift";
import path from "path";
import { addV3LegacyAuthProviderCompatibleTrueToAuthHooks } from "./v4/add-v3LegacyAuthProviderCompatible-true-to-auth-hooks";
import { authProviderToLegacyAuthProvider } from "./v4/authProvider-to-legacyAuthProvider";
import { metaDataToMeta } from "./v4/metadata-to-meta";
import { moveDeprecatedAccessControlProps } from "./v4/move-deprecated-access-control";
import { routerToLegacyRouter } from "./v4/router-to-legacy-router";
import { renameResourcePropInButtons } from "./v4/rename-buttons-resource-prop";
import { separateImportsAntD } from "./v4/separate-imports-antd";
import { separateImportsChakra } from "./v4/separate-imports-chakra";
import { separateImportsMantine } from "./v4/separate-imports-mantine";
import { separateImportsMUI } from "./v4/separate-imports-mui";
import { separateImportsReactHookForm } from "./v4/separate-imports-react-hook-form";
import { separateImportsReactQuery } from "./v4/separate-imports-react-query";
import { separateImportsReactTable } from "./v4/separate-imports-react-table";
import { useMenuToCore } from "./v4/use-menu-to-core";
import { separateImportsReactRouterV6 } from "./v4/separate-imports-react-router-v6";
import { fixV4Deprecations } from "./v4/fix-v4-deprecations";
import { replacePankodImportsWithRefineDev } from "./v4/replace-pankod-imports-with-refinedev";
import { CONFIG_FILE_NAME, CodemodConfig, install, remove } from "../helpers";
import checkPackageLock from "../helpers/checkPackageLock";

export async function postTransform(files: any, flags: any) {
    if (flags.dry) {
        return;
    }

    const config = new CodemodConfig(CONFIG_FILE_NAME);
    const rootDir = path.join(process.cwd(), files[0]);

    const useYarn = checkPackageLock(rootDir) === "yarn.lock";

    if (Object.keys(config.getInstalls()).length > 0) {
        await install(
            rootDir,
            Object.entries(config.getInstalls()).map(
                ([key, value]) => `${key}@${value}`,
            ),
            {
                useYarn,
                isOnline: true,
            },
        );
    }

    if (config.getUninstalls().length > 0) {
        await remove(rootDir, config.getUninstalls(), {
            useYarn,
        });
    }

    config.destroy();
}

export default function transformer(file: FileInfo, api: API): string {
    const j = api.jscodeshift;
    const source = j(file.source);

    fixV4Deprecations(j, source);
    separateImportsReactRouterV6(j, source);
    addV3LegacyAuthProviderCompatibleTrueToAuthHooks(j, source);
    authProviderToLegacyAuthProvider(j, source);
    metaDataToMeta(j, source);
    moveDeprecatedAccessControlProps(j, source);
    renameResourcePropInButtons(j, source);
    routerToLegacyRouter(j, source);
    separateImportsAntD(j, source);
    separateImportsChakra(j, source);
    separateImportsMantine(j, source);
    separateImportsMUI(j, source);
    separateImportsReactHookForm(j, source);
    separateImportsReactQuery(j, source);
    separateImportsReactTable(j, source);
    useMenuToCore(j, source);
    replacePankodImportsWithRefineDev(j, source);

    return source.toSource();
}
