import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import AsyncStorage from '@react-native-community/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore} from 'redux-persist';
import { logger } from 'redux-logger';

import rootReducer from './reducers';
import rootSaga from './saga';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
  
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, __DEV__ && logger]; //add multiple middleware in array


const composer = __DEV__ ? composeWithDevTools : compose;
    
let store = createStore(persistedReducer, composer(
    applyMiddleware(...middlewares),
    // other store enhancers if any
));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);  

export { store, persistor };
