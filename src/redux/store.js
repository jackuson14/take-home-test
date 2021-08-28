import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {
  persistStore,
  persistCombineReducers,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { Data } from "./reducer";

const config = {
    key: "root",
    version: 1,
    storage: storage,
  };

  
const store = createStore(
    persistCombineReducers(config, {
      data: Data,
    }),
    applyMiddleware(thunk)
  );



export const persistor = persistStore(store);
export default store;