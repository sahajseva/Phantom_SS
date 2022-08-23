import { useContext } from "react";

import { RefineContext } from "@contexts/refine";
import { IRefineOptions } from "../../interfaces";

type UseMutationModeType = () => {
    mutationMode: IRefineOptions["mutationMode"];
    undoableTimeout: IRefineOptions["undoableTimeout"];
};

/**
 * Mutation mode determines which mode the mutation runs with.
 * Mutations can run under three different modes: `pessimistic`, `optimistic` and `undoable`.
 * Each mode corresponds to a different type of user experience.
 *
 * @see {@link https://refine.dev/docs/guides-and-concepts/mutation-mode} for more details.
 */
export const useMutationMode: UseMutationModeType = () => {
    const { mutationMode, undoableTimeout, options } =
        useContext(RefineContext);

    const mode = mutationMode ?? options.mutationMode;
    const timeout = undoableTimeout ?? options.undoableTimeout;

    return { mutationMode: mode, undoableTimeout: timeout };
};
