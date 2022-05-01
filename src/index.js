import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./scss/main.scss"
import {Provider} from "react-redux";
import {store} from "./Store";
import {ethers} from "ethers"
import {Web3ReactProvider} from "@web3-react/core";

function getLibrary(provider){
    return new ethers.providers.Web3Provider(provider)
}

ReactDOM.render(
    <React.StrictMode>

        <Provider store={store}>
            <Web3ReactProvider getLibrary={getLibrary}>
                <App/>
            </Web3ReactProvider>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
