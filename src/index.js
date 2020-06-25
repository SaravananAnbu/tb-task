import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import Root from "./containers/routes";
import configureStore from './store';
import history from './history';

export const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Root history={history} />
    </Provider>
, document.getElementById("app"));