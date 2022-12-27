import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './containers/App'

import './index.css'
import {ApolloProvider} from "@apollo/client";
import client from "./apollo/client.js";
import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>
)
