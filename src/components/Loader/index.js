import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./styles";

export default React.memo(
  () => (
    <View style={styles.container}>
      <ActivityIndicator animating color="#fff"/>
    </View>
  )
);
