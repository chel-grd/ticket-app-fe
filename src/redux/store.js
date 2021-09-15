import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { persistStore } from 'redux-persist';

import rootReducers from "./reducers";

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };