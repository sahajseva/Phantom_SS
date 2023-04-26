import React, { ReactNode, useState } from "react";

import { IThemedLayoutContext } from "./IThemedLayoutContext";

export const ThemedLayoutContext = React.createContext<IThemedLayoutContext>({
    siderVisible: false,
    drawerSiderVisible: true,
});

export const ThemedLayoutContextProvider: React.FC<{
    children: ReactNode;
    isSiderCollapsedByDefault?: boolean;
}> = ({ children, isSiderCollapsedByDefault }) => {
    const [siderVisible, setSiderVisible] = useState(false);
    const [drawerSiderVisible, setDrawerSiderVisible] = useState(
        isSiderCollapsedByDefault ?? true,
    );

    return (
        <ThemedLayoutContext.Provider
            value={{
                siderVisible,
                drawerSiderVisible,
                setSiderVisible,
                setDrawerSiderVisible,
            }}
        >
            {children}
        </ThemedLayoutContext.Provider>
    );
};
