import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// middlewares
import thunk from "redux-thunk";

// Import custom components
import rootReducer from "./reducers/rootReducers";

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Fix for Redux DevTools
const composeEnhancers = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
  : compose;

// Create store with middleware
let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

let persistor = persistStore(store);

export { store, persistor };