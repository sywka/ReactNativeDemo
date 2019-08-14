import { StyleSheet } from "react-native";
import Constants from "../../Constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.COLORS.BACKGROUND
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2a2d32",
    borderRadius: 2,
    marginVertical: 5,
    marginHorizontal: 10,
    marginTop: 25
  },
  search: {
    flex: 1,
    color: Constants.COLORS.PRIMARY_TEXT,
    fontFamily: "Avenir-Light",
    marginVertical: 5,
    marginHorizontal: 10
  },
  searchClear: {
    paddingBottom: 4,
    paddingHorizontal: 10,
    fontSize: 25,
    color: Constants.COLORS.PRIMARY_TEXT
  },
  itemHeaderText: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Constants.COLORS.BACKGROUND,
    color: Constants.COLORS.SECONDARY_TEXT
  },
  itemSeparator: {
    height: 1,
    backgroundColor: Constants.COLORS.SECONDARY_TEXT,
    borderLeftWidth: 15,
    borderColor: "rgb(28,29,33)"
  },
  visibleItemContainer: {
    backgroundColor: "rgb(28,29,33)"
  },
  visibleItemContentContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  visibleItemImg: {
    height: 45,
    width: 45,
    margin: 15,
    borderRadius: 45 / 2,
    backgroundColor: "#868e91",
    justifyContent: "center",
    alignItems: "center"
  },
  visibleItemImgText: {
    color: Constants.COLORS.PRIMARY_TEXT
  },
  visibleItemTextContainer: {
    flex: 1,
    marginRight: 10
  },
  visibleItemPrimaryText: {
    fontSize: 18,
    color: Constants.COLORS.PRIMARY_TEXT,
    fontFamily: "Avenir-Light"
  },
  visibleItemSecondaryText: {
    color: Constants.COLORS.SECONDARY_TEXT,
    fontFamily: "Avenir-Light"
  },
  hiddenItemContainer: {
    flex: 1,
    alignItems: "flex-end",
    backgroundColor: Constants.COLORS.ACCENT
  },
  hiddenItemTouch: {
    flex: 1,
    width: 96,
    justifyContent: "center",
    alignItems: "center"
  },
  hiddenItemText: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Avenir-Light"
  },
  headerRightButton: {
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Constants.COLORS.ACCENT,
    borderRadius: 4
  },
  headerRightButtonText: {
    fontSize: 25,
    color: Constants.COLORS.PRIMARY_TEXT
  }
});
