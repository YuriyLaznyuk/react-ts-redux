import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer";
import {todoReducer} from "./reducers/todoReducer";

export const rootReducer=combineReducers({
    user:userReducer,
    todo:todoReducer

});
export const store=createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));

export type RootState=ReturnType<typeof rootReducer>