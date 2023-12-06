import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";

import authReducer from "./reducer";

const persistConfig = {
	blacklist: ["toast"],
	key: "root",
	stateReconciler: autoMergeLevel2,
	storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
	middleware: [logger, thunk],
	reducer: {
		auth: persistedReducer,
	},
});

const persistedStore = persistStore(store);

export default persistedStore;
