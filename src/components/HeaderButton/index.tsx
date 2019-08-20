import React, {FC} from "react";
import {Text} from "react-native";
import PlatformTouchable from "react-native-platform-touchable";
import styles from "./styles";

export interface IProps {
    title: string;
    onPress: () => void;
    inverse?: boolean;
}

const component: FC<IProps> = ({title, onPress, inverse}) => (
    <PlatformTouchable
        onPress={onPress}
        style={[styles.container, inverse ? styles.inverseContainer : styles.rightContainer]}
    >
        <Text
            style={[styles.buttonText, inverse ? styles.inverseButtonText : styles.rightButtonText]}>{title}</Text>
    </PlatformTouchable>
);

export default React.memo(component);
