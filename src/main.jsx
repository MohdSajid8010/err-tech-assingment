import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { store } from "./redux-tooolkit-store/store.jsx"
import { Provider } from "react-redux"
import {ThemeContextProvider} from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>

        <Provider store={store}>

            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ThemeContextProvider>

)
