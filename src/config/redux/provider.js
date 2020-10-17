import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { store, persistor } from './store';

const AppProvider = ({ children }) => {
    //console.log("store ffff", store);
    return <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
         </Provider>
}

export default AppProvider;