import React from "react";
import { Text } from "react-native";
import PlatformTouchable from "react-native-platform-touchable";
import styles from "./styles";

export default React.memo(
  ({ title, onPress, inverse }) => (
    <PlatformTouchable
      onPress={onPress}
      style={[styles.container, inverse ? styles.inverseContainer : styles.rightContainer]}
    >
      <Text style={[styles.buttonText, inverse ? styles.inverseButtonText : styles.rightButtonText]}>{title}</Text>
    </PlatformTouchable>
  )
);
