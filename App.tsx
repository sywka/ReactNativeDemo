import React from "react";
import {useScreens} from "react-native-screens";
import {createAppContainer} from "react-navigation";
import {Provider} from "react-redux";
// @ts-ignore
import {PersistGate} from "redux-persist/lib/integration/react";
import Loader from "./src/components/Loader";
import RootNavigator from "./src/navigators/RootNavigator";
import persistantStore from "./src/redux/persiststore";

useScreens();

const {store, persistor} = persistantStore;

const AppContainer = createAppContainer(RootNavigator);

export default () => (
    <Provider store={store}>
        <PersistGate loading={< Loader/>}
                     persistor={persistor}>
            <AppContainer/>
        </PersistGate>
    </Provider>
);
