import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import App from './App';
import 'bulma/css/bulma.css';
import './styles.css';

const el = document.querySelector("#root");

const root = ReactDOM.createRoot(el);

root.render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
);
