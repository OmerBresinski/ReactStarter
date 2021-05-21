import { apiAction } from "store/actions";
import { REST_METHODS } from "constant";
import { labels } from "./types";

export const async_register = (data) => {
    return apiAction({
        data,
        url: "/users",
        method: REST_METHODS.get,
        type: labels.REGISTER_SET,
        onSuccess: (response) => {
            return {
                type: labels.SET,
                payload: response,
            };
        },
    });
};

export const register = (user) => {
    return {
        type: labels.REGISTER_SET,
        payload: user,
    };
};
