import React from "react";
import { Command } from "commander";
import preferredPM from "preferred-pm";
import { render } from "ink";
import UpdateWarningTable from "src/components/update-warning-table";
import {
    NpmOutdatedResponse,
    RefinePackageInstalledVersionData,
} from "src/interfaces";
import execa from "execa";
import spinner from "src/utils/spinner";

const load = (program: Command) => {
    return program
        .command("check-updates")
        .description("Check all installed `refine` packages are up to date")
        .action(action);
};

const action = async () => {
    const packages = await spinner(isRefineUptoDate, "Checking for updates...");

    if (!packages?.length) {
        console.log("All `refine` packages are up to date 🎉");
        return;
    }

    render(<UpdateWarningTable data={packages} />);
};

/**
 * Displays update warning if there is any `refine` package update available.
 */
export const getUpdateWarning = async () => {
    const packages = await isRefineUptoDate();
    if (!packages) return;

    render(<UpdateWarningTable data={packages} />);
};

/**
 *
 * @returns `refine` packages that have updates.
 * @returns `[]` if no refine package found.
 * @returns `[]` if all `refine` packages are up to date.
 */
export const isRefineUptoDate = async () => {
    const pm = await preferredPM(process.cwd());
    if (!pm) return null;

    const refinePackages = await getOutdatedRefinePackages(pm.name);
    if (!refinePackages.length) return null;

    return refinePackages;
};

const getOutdatedRefinePackages = async (pm: "npm" | "pnpm" | "yarn") => {
    const packages = await getOutdatedPackageList(pm);
    if (!packages) return [];

    const list: RefinePackageInstalledVersionData[] = [];

    Object.keys(packages).forEach((packageName) => {
        const dependency = packages[packageName];

        if (packageName.includes("@pankod/refine")) {
            list.push({
                name: packageName,
                current: dependency.current,
                wanted: dependency.wanted,
                latest: dependency.latest,
            });
        }
    });

    return list;
};

const getOutdatedPackageList = async (pm: "npm" | "pnpm" | "yarn") => {
    try {
        const { stdout } = await execa(`${pm}`, [`outdated`, `--json`], {
            reject: false,
            timeout: 10000,
        });

        if (!stdout) return null;

        return JSON.parse(stdout) as NpmOutdatedResponse | null;
    } catch (e) {
        return null;
    }
};

export default load;
