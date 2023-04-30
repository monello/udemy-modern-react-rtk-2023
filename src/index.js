import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { NavigationProvider } from "./context/navigation";
import { Provider as ReduxProvider } from "react-redux";
import { store } from './store';

import './index.css';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
    <NavigationProvider>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </NavigationProvider>
);

