import { apiAction } from "store/actions";
import { REST_METHODS } from "constant";
import { labels } from "./types";

export const async_fetch = () => {
    return apiAction({
        type: labels.FETCH,
        method: REST_METHODS.get,
        url: "/users",
        payload: "Hey",
        onSuccess: (response) => {
            return {
                type: labels.SET,
                payload: response,
            };
        },
    });
};

export const fetch = () => {
    return {
        type: labels.FETCH,
        payload: "Initial State",
    };
};
