import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './reducer';
import reduxThunk from 'redux-thunk';
import {persistStore} from 'redux-persist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));
const persistor = persistStore(store);

export {store, persistor}