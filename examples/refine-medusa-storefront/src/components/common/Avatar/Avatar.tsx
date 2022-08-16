import { useGetIdentity } from "@pankod/refine-core";
import { FC, useRef } from "react";

interface Props {
    className?: string;
    children?: any;
}

export const Avatar: FC<Props> = ({}) => {
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
    const { data } = useGetIdentity();

    return (
        <div
            ref={ref}
            className="border-primary hover:border-secondary focus:border-secondary inline-block h-8 w-8 rounded-full border-2 transition-colors ease-linear"
            style={{
                backgroundImage:
                    "linear-gradient(140deg, rgb(121, 255, 225), rgb(218, 60, 60) 100%)",
            }}
        >
            {data && <img />}
        </div>
    );
};
