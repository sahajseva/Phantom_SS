import { IconProps } from "src/types/icon";

export const Logo: React.FC<IconProps & { short?: boolean }> = ({
    short,
    ...props
}) => {
    return short ? (
        <svg
            width={40}
            height={35}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M10.845 10.454h-3.18a.5.5 0 0 1-.342-.145.49.49 0 0 1-.146-.337V9.39c-.001-2.427 1.114-3.64 3.347-3.64a5.307 5.307 0 0 1 2.15.429.866.866 0 0 0 .974-.187.848.848 0 0 0 .185-.293l1.342-3.664a.847.847 0 0 0-.44-1.063 8.745 8.745 0 0 0-1.79-.617A13.71 13.71 0 0 0 9.806 0C6.695 0 4.282.84 2.57 2.52.856 4.2 0 6.472 0 9.333V31.36c0 .966.388 1.892 1.077 2.574a3.698 3.698 0 0 0 4.009.79 3.682 3.682 0 0 0 1.193-.79 3.607 3.607 0 0 0 1.077-2.574V16.544a.499.499 0 0 1 .496-.491h2.993c.75 0 1.47-.295 2-.82.53-.525.828-1.237.828-1.98 0-.742-.298-1.454-.828-1.98a2.844 2.844 0 0 0-2-.82Z"
                fill="url(#a)"
            />
            <path
                d="M20.3 12c.929 0 1.741.638 1.994 1.532.082.293.179.627.29 1.003.06.2.167.546.31 1H37.57a2 2 0 0 1 1.95 2.45l-2.078 9a2 2 0 0 1-1.949 1.55H25.117a2 2 0 0 1-1.931-1.48l-1.006-3.736-3.209-8.784h-2.704a1.267 1.267 0 0 1 0-2.535H20.3Z"
                fill="url(#b)"
            />
            <path
                d="M37.084 32.035a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                fill="url(#c)"
            />
            <path
                d="M25.584 34.535a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                fill="url(#d)"
            />
            <defs>
                <linearGradient
                    id="a"
                    x1={3.742}
                    y1={17.5}
                    x2={34.688}
                    y2={17.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3FDCF7" />
                    <stop offset={1} stopColor="#1890FF" />
                </linearGradient>
                <linearGradient
                    id="b"
                    x1={3.742}
                    y1={17.5}
                    x2={34.688}
                    y2={17.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3FDCF7" />
                    <stop offset={1} stopColor="#1890FF" />
                </linearGradient>
                <linearGradient
                    id="c"
                    x1={3.742}
                    y1={17.5}
                    x2={34.688}
                    y2={17.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3FDCF7" />
                    <stop offset={1} stopColor="#1890FF" />
                </linearGradient>
                <linearGradient
                    id="d"
                    x1={3.742}
                    y1={17.5}
                    x2={34.688}
                    y2={17.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3FDCF7" />
                    <stop offset={1} stopColor="#1890FF" />
                </linearGradient>
            </defs>
        </svg>
    ) : (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 129 35"
            xmlSpace="preserve"
            {...props}
        >
            <path
                d="M65.4 9.4c-1.4 0-2.7.6-3.7 1.5-1 1-1.5 2.3-1.5 3.7v15.1c0 1.4.6 2.7 1.5 3.7 1 1 2.3 1.5 3.7 1.5s2.7-.5 3.7-1.5 1.5-2.3 1.5-3.7V14.6c0-1.4-.6-2.7-1.5-3.7-1-1-2.3-1.5-3.7-1.5zm3.7 20.3c0 1-.4 1.9-1.1 2.6-.7.7-1.6 1.1-2.6 1.1s-1.9-.4-2.6-1.1c-.7-.7-1.1-1.6-1.1-2.6V14.6c0-.5.1-1 .3-1.4.2-.4.5-.8.8-1.2.3-.3.7-.6 1.2-.8.4-.2.9-.3 1.4-.3 1 0 1.9.4 2.6 1.1.7.7 1.1 1.6 1.1 2.6v15.1zM59.1 1c-.6-.3-1.2-.5-1.8-.6-1-.2-2.1-.4-3.1-.4-3.1 0-5.5.8-7.2 2.5-1.7 1.7-2.6 4-2.6 6.8v22c0 1 .4 1.9 1.1 2.6.6.7 1.5 1.1 2.5 1.1.5 0 1-.1 1.4-.3.4-.2.9-.5 1.2-.8.3-.3.6-.7.8-1.2.2-.4.3-.9.3-1.4V16.5c0-.1.1-.3.1-.3.1-.1.2-.1.4-.1h3c.8 0 1.5-.3 2-.8s.8-1.2.8-2-.3-1.5-.8-2-1.2-.8-2-.8H52c-.1 0-.3-.1-.3-.1-.1-.1-.1-.2-.1-.3v-.7c0-2.4 1.1-3.6 3.3-3.6.7 0 1.5.1 2.1.4.1 0 .2.1.3.1.1 0 .2 0 .3-.1.1 0 .2-.1.3-.2.1-.1.1-.2.2-.3L59.5 2c.1-.2.1-.4 0-.6-.1-.2-.2-.3-.4-.4zm68.2 14.1c-1.1-1.9-2.8-3.5-4.7-4.6-2-1.1-4.3-1.6-6.7-1.6-2.5 0-4.8.6-6.9 1.7-2 1.1-3.7 2.7-4.9 4.6-1.2 2-1.8 4.3-1.8 6.6 0 2.5.6 4.7 1.8 6.7 1.2 2 3 3.6 5.1 4.6 2.2 1.1 4.7 1.7 7.6 1.7 3.1 0 5.6-.6 7.7-1.8.4-.2.7-.5 1-.9.2-.4.4-.8.5-1.2.1-.4 0-.9-.1-1.3s-.4-.8-.7-1.1c-.9-.9-2.5-1.2-3.6-.5-.3.2-.7.3-1 .5-1.1.4-2.3.6-3.5.6-1.9 0-3.5-.5-4.8-1.4-1.1-.8-1.9-1.9-2.3-3.2v-.2c0-.1 0-.1.1-.2l.1-.1H127c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-2.6-.6-4.9-1.7-6.9zm-5.3 4.3c0 .1 0 .1-.1.2 0 .1-.1.1-.2.1H110c-.1 0-.1-.1-.2-.1 0-.1-.1-.1-.1-.2v-.2c.3-1.3 1-2.4 2-3.2 1.1-.9 2.5-1.4 4.2-1.4 1.6 0 3 .5 4.1 1.4 1 .8 1.7 2 2 3.2v.2zm-35.2-10c-4 0-7.2 1.1-9.4 3.2-2.3 2.1-3.4 5.1-3.4 8.9v9.9c0 1 .4 1.9 1.1 2.6.7.7 1.6 1.1 2.6 1.1s1.9-.4 2.6-1.1c.7-.7 1.1-1.6 1.1-2.6v-9.7c0-2.1.5-3.6 1.4-4.7.9-1.1 2.2-1.6 4-1.6 1.8 0 3.2.5 4.1 1.6.9 1.1 1.4 2.6 1.4 4.7v9.7c0 1 .4 1.9 1.1 2.6.7.7 1.6 1.1 2.6 1.1s1.9-.4 2.6-1.1c.7-.7 1.1-1.6 1.1-2.6v-9.9c0-3.8-1.1-6.7-3.4-8.9-2.3-2.1-5.4-3.2-9.5-3.2z"
                style={{
                    fill: "#1890ff",
                }}
            />
            <path
                d="m16.2 9.5.1-.2C15.1 9.1 14 9 12.8 9c-4 0-7.2 1.1-9.4 3.2C1.1 14.4 0 17.3 0 21.1v10.3c0 1 .4 1.9 1.1 2.6.7.6 1.6 1 2.6 1s1.9-.4 2.6-1.1c.7-.7 1.1-1.6 1.1-2.6v-10c0-2.1.5-3.7 1.4-4.7.8-.9 2-1.5 3.5-1.6.3-.6.6-1.2.9-1.7.7-1.4 1.8-2.7 3-3.8zm23.5 5.6c-1.1-1.9-2.8-3.5-4.7-4.6-2-1-4.3-1.5-6.8-1.5s-4.8.6-6.9 1.7c-2 1.1-3.7 2.7-4.9 4.6-1.2 2-1.8 4.3-1.8 6.6 0 2.5.6 4.7 1.8 6.7 1.2 2 3 3.6 5.1 4.6 2.2 1.1 4.7 1.7 7.6 1.7 3 0 5.6-.6 7.7-1.8.4-.2.7-.5 1-.9.2-.4.4-.8.5-1.2.1-.4 0-.9-.1-1.3s-.4-.8-.7-1.1c-.9-.9-2.5-1.2-3.6-.5-.3.2-.7.3-1 .5-1.1.4-2.3.6-3.5.6-1.9 0-3.5-.5-4.8-1.4-1.1-.8-1.9-1.9-2.3-3.2v-.2c0-.1 0-.1.1-.2l.1-.1h17c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4-.1-2.7-.6-5-1.8-7zm-5.4 4.5c0 .1-.1.1-.2.1H22.4c-.1 0-.1-.1-.2-.1 0-.1-.1-.1-.1-.2v-.2c.3-1.3 1-2.4 2-3.2 1.1-.9 2.5-1.4 4.2-1.4 1.6 0 3 .5 4.2 1.4 1 .8 1.7 2 2 3.2v.2c-.1 0-.2.1-.2.2zm31.1-7.9c-1.5 0-2.8 1.2-2.8 2.8 0 1.5 1.3 2.8 2.8 2.8 1.5 0 2.8-1.2 2.8-2.8 0-1.5-1.3-2.8-2.8-2.8z"
                style={{
                    fill: "#3fdcf7",
                }}
            />
        </svg>
    );
};
