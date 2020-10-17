import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

import rootReducer from './reducers';
import rootSaga from './saga';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
  
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]; //add multiple middleware in array

let store = null;

if (__DEV__) {
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    store = composeEnhancers(applyMiddleware(...middlewares))(createStore)(persistedReducer);
} else {
    store = compose(applyMiddleware(...middlewares))(createStore)(persistedReducer);
}

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);  

export default { store, persistor };
