import React from "react";
import { SafeAreaView, SectionList, StatusBar, Text, TextInput, View } from "react-native";
import PlatformTouchable from "react-native-platform-touchable";
import { SwipeRow } from "react-native-swipe-list-view";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HeaderButton from "../../components/HeaderButton";
import Constants from "../../Constants";
import * as actions from "../../redux/actions";
import { filterArray } from "../../utils";
import styles from "./styles";

class ContactsScreen extends React.PureComponent {

  static navigationOptions = ({ navigation }) => ({
    title: "Contacts",
    headerRight: <HeaderButton title={"+"} onPress={() => navigation.navigate(Constants.SCREENS.CONTACT_DETAIL)}/>,
    headerRightContainerStyle: {
      paddingRight: 15
    }
  });

  static getContactAbr (name) {
    return name && name.trim() ? name.trim()[0].toUpperCase() : "";
  }

  state = {
    filter: ""
  };

  _getSections () {
    const { contacts } = this.props;
    const { filter } = this.state;

    const list = filterArray(contacts, filter, ["firstName", "secondName", "phone", "email"]);
    list.sort((a, b) => a.firstName.trim().localeCompare(b.firstName.trim()));

    if (!list.length) {
      return [];
    }

    return list.reduce((sections, item) => {
      const curSectionTitle = ContactsScreen.getContactAbr(item.firstName);
      let lastSections = sections[sections.length - 1];
      if (lastSections.title !== curSectionTitle) {
        lastSections = {
          title: curSectionTitle,
          data: []
        };
        sections.push(lastSections);
      }

      lastSections.data.push(item);

      return sections;
    }, [{ title: ContactsScreen.getContactAbr(list[0].firstName), data: [] }]);
  }

  _clearFilter = () => this.setState({ filter: "" });

  _onChangeFilterText = (filter) => this.setState({ filter });

  _keyExtractor = (item) => `item${item.id}`;

  _renderSeparator = () => (
    <View style={styles.itemSeparator}/>
  );

  _renderSectionHeader = ({ section }) => (
    <Text style={styles.itemHeaderText}>{section.title}</Text>
  );

  _renderItem = ({ item }) => {
    const { deleteContact, navigation } = this.props;
    return (
      <SwipeRow
        disableRightSwipe
        rightOpenValue={-96}
      >
        <View style={styles.hiddenItemContainer}>
          <PlatformTouchable
            onPress={() => deleteContact(item.id)}
            style={styles.hiddenItemTouch}
          >
            <Text style={styles.hiddenItemText}>Delete</Text>
          </PlatformTouchable>
        </View>
        <View style={styles.visibleItemContainer}>
          <PlatformTouchable onPress={() => navigation.navigate(Constants.SCREENS.CONTACT_DETAIL, { id: item.id })}>
            <View style={styles.visibleItemContentContainer}>
              <View style={styles.visibleItemImg}>
                <Text style={styles.visibleItemImgText}>
                  {ContactsScreen.getContactAbr(item.firstName) + ContactsScreen.getContactAbr(item.secondName)}
                </Text>
              </View>
              <View style={styles.visibleItemTextContainer}>
                <Text
                  numberOfLines={1}
                  style={styles.visibleItemPrimaryText}
                >
                  {item.firstName + (item.secondName ? ` ${item.secondName}` : "")}
                </Text>
                <Text
                  numberOfLines={1}
                  style={styles.visibleItemSecondaryText}
                >
                  {item.phone || item.email}
                </Text>
              </View>
            </View>
          </PlatformTouchable>
        </View>
      </SwipeRow>
    );
  };

  render () {
    const { filter } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.searchContainer}>
          <TextInput
            value={filter}
            onChangeText={this._onChangeFilterText}
            returnKeyType={"search"}
            placeholder={"Search contacts by name or phone"}
            placeholderTextColor={Constants.COLORS.SECONDARY_TEXT}
            style={styles.search}
          />
          <PlatformTouchable onPress={this._clearFilter}>
            <Text style={styles.searchClear}>{"×"}</Text>
          </PlatformTouchable>
        </View>
        <SectionList
          sections={this._getSections()}
          renderSectionHeader={this._renderSectionHeader}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={this._renderSeparator}
        />
      </SafeAreaView>
    );
  }
}

export default connect(
  (state) => ({
    contacts: state.contacts
  }),
  (dispatch) => bindActionCreators(actions, dispatch)
)(ContactsScreen);
