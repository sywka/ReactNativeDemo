import {StyleSheet} from "react-native";
import Constants from "../../Constants";

export default StyleSheet.create({
    container: {
        minWidth: 35,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        borderRadius: 4
    },
    rightContainer: {
        backgroundColor: Constants.COLORS.ACCENT
    },
    inverseContainer: {},
    buttonText: {
        fontSize: 20,
        fontFamily: "Avenir-Light"
    },
    rightButtonText: {
        color: Constants.COLORS.PRIMARY_TEXT
    },
    inverseButtonText: {
        color: Constants.COLORS.ACCENT
    }
});
