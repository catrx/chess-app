import React from 'react'
import ReactDOM from 'react-dom'
import App from "./app/app";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./app/store"

const Store = createStore(reducers)


const Application = (
    <Provider store={Store}>
        <App />
    </Provider>
)

ReactDOM.render(
    Application,
    document.getElementById('app-root'),
)