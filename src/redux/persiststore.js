import AsyncStorage from "@react-native-community/async-storage";
import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const persiststore = createStore(
  persistReducer({ key: "root", storage: AsyncStorage }, rootReducer)
);

const persistor = persistStore(persiststore);

export default { store: persiststore, persistor };
