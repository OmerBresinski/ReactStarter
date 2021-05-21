import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer1 } from "store/reducers";
import { api } from "store/middleware";

const rootReducer = combineReducers({
    reducer1,
});

const store = createStore(rootReducer, applyMiddleware(api));

export default store;
