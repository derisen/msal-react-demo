import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import App from './App';

import { EventType, PublicClientApplication } from '@azure/msal-browser';

const pca = new PublicClientApplication({
    auth:{
        clientId: '508791b6-d9db-4eb7-beec-ec3f4da19a78',
        redirectUri: '/',
        authority:'https://login.microsoftonline.com/mclucenayahoo.onmicrosoft.com'
    }
}
);

pca.addEventCallback (event => {
    if(event.eventType == EventType.LOGIN_SUCCESS){
        console.log(event);
        pca.setActiveAccount(event.payload.account)
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App msalInstance={pca}/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
