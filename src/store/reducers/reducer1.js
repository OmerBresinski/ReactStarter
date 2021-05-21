import { labels } from "store/actions/state1";

export const reducer1 = (state = [], action) => {
    switch (action.type) {
        case labels.SET:
            return [...state, action.payload];
        default:
            return state;
    }
};
