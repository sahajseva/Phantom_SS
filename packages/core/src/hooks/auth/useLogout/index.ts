import React from "react";

import { AuthContext } from "@contexts/auth";
import { IAuthContext } from "../../../interfaces";
import { useNavigation } from "@hooks/navigation";

export const useLogout = () => {
    const { push } = useNavigation();
    const {
        isProvided,
        logout: logoutFromContext,
    } = React.useContext<IAuthContext>(AuthContext);

    if (isProvided) {
        const logout = React.useCallback(
            (redirectPath = "/login") =>
                logoutFromContext()
                    .then((data) => {
                        push(redirectPath);
                        Promise.resolve(data);
                    })
                    .catch((error) => Promise.reject(error)),
            [],
        );

        return logout;
    }

    return null;
};
