import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from "./store";
import App from './App';
import './index.css';

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
);
