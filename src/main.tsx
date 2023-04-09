import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContextRootStore, store } from './mst/store/RootStore';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ContextRootStore.Provider value={store}>
        <App/>
    </ContextRootStore.Provider>
)
