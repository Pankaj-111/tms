import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import { encryptTransform } from 'redux-persist-transform-encrypt';

const createStreamReducer = (stream={name:'Pankaj Singh'}, action) => {
    if(action.type ==='ABC'){
        return action.payload;
    }
    return stream;
}

const encryptor =  encryptTransform({
    secretKey: 'TMS-Secret-Key',
    onError: function (error) {
      console.log("Error in creating Encryptor ",error);
    },
  })

const persistConfig = {
    key: 'root',
    storage,
    transforms:[encryptor]
}
const rootReducer =  combineReducers({
    streams:createStreamReducer,
    form: formReducer
});

export default persistReducer(persistConfig,rootReducer);
