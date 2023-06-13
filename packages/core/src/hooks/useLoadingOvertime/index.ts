import { useEffect, useState } from "react";
import { UseResourceReturnType, useRefineContext, useResource } from "..";

export type IUseLoadingOvertimeOnIntervalContext = UseResourceReturnType;

export type UseLoadingOvertimeReturnType = {
    elapsedTime?: number;
};

export type UseLoadingOvertimeProps = {
    isLoading: boolean;
    interval?: number;
    onInterval?: (
        elapsedInterval: number,
        context: IUseLoadingOvertimeOnIntervalContext,
    ) => void;
};

/**
 * if you need to do something when the loading time exceeds the specified time, refine provides the `useLoadingOvertime` hook.
 * It returns the elapsed time in milliseconds.
 *
 * @example
 * const { elapsedTime } = useLoadingOvertime({
 *    isLoading,
 *    interval: 5000,
 *    onInterval(elapsedInterval, context) {
 *        console.log("loading overtime", elapsedInterval, context);
 *    },
 * });
 */
export const useLoadingOvertime = ({
    isLoading,
    interval: intervalProp,
    onInterval: onIntervalProp,
}: UseLoadingOvertimeProps): UseLoadingOvertimeReturnType => {
    const resourceContextData = useResource();
    const [elapsedTime, setElapsedTime] = useState<number | undefined>(
        undefined,
    );
    // get overtime options from refine context
    const { options } = useRefineContext();
    const { overtime } = options;

    // pick props or refine context options
    const interval = intervalProp ?? overtime?.interval;
    const onInterval = onIntervalProp ?? overtime?.onInterval;

    useEffect(() => {
        let intervalFn: ReturnType<typeof setInterval>;
        if (isLoading) {
            intervalFn = setInterval(() => {
                // increase elapsed time
                setElapsedTime((prevElapsedTime) => {
                    if (prevElapsedTime === undefined) {
                        return 1000;
                    }

                    return prevElapsedTime + 1000;
                });
            }, 1000);
        }

        return () => {
            clearInterval(intervalFn);
            // reset elapsed time
            setElapsedTime(undefined);
        };
    }, [isLoading]);

    useEffect(() => {
        if (interval && elapsedTime && onInterval && elapsedTime >= interval) {
            onInterval(elapsedTime, resourceContextData);
        }
    }, [elapsedTime]);

    return {
        elapsedTime,
    };
};
