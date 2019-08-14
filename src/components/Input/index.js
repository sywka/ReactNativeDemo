import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

export default React.memo(
  React.forwardRef(
    ({ inputKey, label, onChangeText, onSubmitEditing, ...props }, ref) => (
      <View style={styles.container}>
        {label && <Text style={styles.labelText}>{label}</Text>}
        <TextInput
          placeholderTextColor={"#262a2d"}
          {...props}
          ref={ref}
          onChangeText={(text) => onChangeText({ inputKey, text })}
          onSubmitEditing={(event) => onSubmitEditing({ inputKey, ...event })}
          style={styles.input}
        />
      </View>
    )
  )
);
