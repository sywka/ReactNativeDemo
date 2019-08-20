import {createStackNavigator} from "react-navigation";
import Constants from "../Constants";
import ContactDetailScreen from "../screens/ContactDetailScreen";
import ContactsScreen from "../screens/ContactsScreen";

export default createStackNavigator({
    [Constants.SCREENS.CONTACTS]: {
        screen: ContactsScreen
    },
    [Constants.SCREENS.CONTACT_DETAIL]: {
        screen: ContactDetailScreen
    }
}, {
    mode: "modal",
    defaultNavigationOptions: {
        headerTitleStyle: {
            fontSize: 25,
            color: Constants.COLORS.PRIMARY_TEXT,
            fontFamily: "Avenir-Light"
        },
        headerStyle: {
            backgroundColor: Constants.COLORS.BACKGROUND,
            borderBottomWidth: 0,
            elevation: 0
        }
    }
});
