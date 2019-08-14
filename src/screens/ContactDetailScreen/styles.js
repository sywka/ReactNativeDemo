import { StyleSheet } from "react-native";
import Constants from "../../Constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.COLORS.BACKGROUND
  },
  scrollContainer: {
    paddingVertical: 20
  },
  scrollContentContainer: {
    backgroundColor: "rgb(28,29,33)"
  },
  itemSeparator: {
    height: 1,
    backgroundColor: Constants.COLORS.SECONDARY_TEXT,
    marginLeft: 15
  },
  deleteButtonText: {
    fontSize: 18,
    color: Constants.COLORS.ACCENT,
    textAlign: "center",
    padding: 16,
    margin: 16,
    borderColor: Constants.COLORS.ACCENT,
    borderRadius: 4,
    borderWidth: 1
  }
});
