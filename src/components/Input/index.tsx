import React, {FC} from "react";
import {NativeSyntheticEvent, Text, TextInput, TextInputSubmitEditingEventData, View} from "react-native";
import styles from "./styles";

export interface IProps {
    inputKey?: string;
    label?: string;
    onChangeText: (obj: { inputKey?: string, text: string }) => void;
    onSubmitEditing: (obj: { inputKey?: string } | NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
}

const component: FC<IProps> = ({inputKey, label, onChangeText, onSubmitEditing, ...props}, ref) => (
    <View style={styles.container}>
        {label && <Text style={styles.labelText}>{label}</Text>}
        <TextInput
            placeholderTextColor={"#262a2d"}
            {...props}
            ref={ref}
            onChangeText={(text) => onChangeText({inputKey, text})}
            onSubmitEditing={(event) => onSubmitEditing({inputKey, ...event})}
            style={styles.input}
        />
    </View>
);

export default React.memo(React.forwardRef(component));
