import React from "react";
import { Alert, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import PlatformTouchable from "react-native-platform-touchable";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HeaderButton from "../../components/HeaderButton";
import Input from "../../components/Input";
import * as actions from "../../redux/actions";
import { validateEmail } from "../../utils";
import styles from "./styles";

class ContactDetailScreen extends React.PureComponent {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("id") ? "Contact" : "New Contact",
    headerLeft: <HeaderButton inverse title={"Cancel"} onPress={() => navigation.goBack()}/>,
    headerLeftContainerStyle: {
      paddingLeft: 15
    },
    headerRight: <HeaderButton title={"Save"} onPress={() => navigation.getParam("save")()}/>,
    headerRightContainerStyle: {
      paddingRight: 15
    }
  });

  state = {
    firstName: this.props.firstName || "",
    secondName: this.props.secondName || "",
    phone: this.props.phone || "",
    email: this.props.email || ""
  };

  _firstName = React.createRef();
  _secondName = React.createRef();
  _phone = React.createRef();
  _email = React.createRef();

  componentDidMount () {
    this.props.navigation.setParams({ save: this._save });
  }

  _save = () => {
    const { createOrUpdateContact, navigation } = this.props;
    const { firstName, secondName, phone, email } = this.state;

    const id = navigation.getParam("id");

    if (!firstName) return alert("Please fill in the first name");
    if (email && !validateEmail(email)) return alert("Please check your email");

    createOrUpdateContact({ id, firstName, secondName, phone, email });
    navigation.goBack();
  };

  _delete = () => {
    const { deleteContact, navigation } = this.props;

    Alert.alert(
      "Warning",
      "Are you sure you want to delete?",
      [{
        text: "Cancel",
        style: "cancel"
      }, {
        text: "Yes",
        onPress: () => {
          deleteContact(navigation.getParam("id"));
          navigation.goBack();
        }
      }]
    );
  };

  _onChangeText = ({ inputKey, text }) => this.setState({ [inputKey]: text });

  _onSubmitEditing = ({ inputKey }) => {
    switch (inputKey) {
      case "firstName":
        return this._secondName.current.focus();
      case "secondName":
        return this._phone.current.focus();
      case "phone":
        return this._email.current.focus();
      case "email":
        return this._save();
    }
  };

  _renderSeparator = () => (
    <View style={styles.itemSeparator}/>
  );

  render () {
    const { navigation } = this.props;
    const { firstName, secondName, phone, email } = this.state;

    const id = navigation.getParam("id");

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <ScrollView
          contentContainerStyle={styles.scrollContentContainer}
          style={styles.scrollContainer}
        >
          <Input
            ref={this._firstName}
            returnKeyType={"next"}
            autoFocus={!id}
            maxLength={64}
            inputKey={"firstName"}
            label={"First Name"}
            placeholder={"Contact First Name"}
            value={firstName}
            onChangeText={this._onChangeText}
            onSubmitEditing={this._onSubmitEditing}
          />
          {this._renderSeparator()}
          <Input
            ref={this._secondName}
            returnKeyType={"next"}
            maxLength={64}
            inputKey={"secondName"}
            label={"Second Name"}
            placeholder={"Contact Second Name"}
            value={secondName}
            onChangeText={this._onChangeText}
            onSubmitEditing={this._onSubmitEditing}
          />
          {this._renderSeparator()}
          <Input
            ref={this._phone}
            returnKeyType={"next"}
            keyboardType={"phone-pad"}
            maxLength={64}
            inputKey={"phone"}
            label={"Phone"}
            placeholder={"Contact Phone"}
            value={phone}
            onChangeText={this._onChangeText}
            onSubmitEditing={this._onSubmitEditing}
          />
          {this._renderSeparator()}
          <Input
            ref={this._email}
            returnKeyType={"done"}
            keyboardType={"email-address"}
            maxLength={64}
            inputKey={"email"}
            label={"Email"}
            placeholder={"Contact Email"}
            allowFontScaling
            value={email}
            onChangeText={this._onChangeText}
            onSubmitEditing={this._onSubmitEditing}
          />
        </ScrollView>
        {id && (
          <PlatformTouchable onPress={this._delete}>
            <Text style={styles.deleteButtonText}>{"Delete"}</Text>
          </PlatformTouchable>
        )}
      </SafeAreaView>
    );
  }
}

export default connect(
  (state, { navigation }) => ({
    ...state.contacts.find((contact) => contact.id === navigation.getParam("id"))
  }),
  (dispatch) => bindActionCreators(actions, dispatch)
)(ContactDetailScreen);
