import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// =============================================================================
//                          MIDDLEWARE (e.g., redux-promise)
// Middlewares are functions that take an action and depending on the action's
// type and the actions payload (or any other no. of factors), the middleware
// can choose the action to pass through, it can manipulate the action, it can
// console log it, or it can stop it all together. Before they reach any reducers
// ==============================================================================
import ReduxPromise from "redux-promise";

import App from "./components/app";
import reducers from "./reducers";

// const createStoreWithMiddleware = applyMiddleware()(createStore);
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
    <Provider store={ createStoreWithMiddleware(reducers) }>
        <App />
    </Provider>,
    document.querySelector("#demo")
);