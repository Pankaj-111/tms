import React from 'react';
import {Provider} from 'react-redux';
import {store,persistor} from './store/Store';
import {PersistGate} from 'redux-persist/integration/react';

const Root = props => {
    return (
        <Provider store={store}>
        <PersistGate persistor={persistor}>
            {props.children}
        </PersistGate>
    </Provider>
    )
}

export default Root;