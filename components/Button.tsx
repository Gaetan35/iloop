import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';

const Button = (props: {
    label: string;
    onPress: () => void;
    textStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
}) => {
    const { label, onPress, textStyle, containerStyle } = props;
    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <Text style={textStyle}>{label}</Text>
        </TouchableOpacity>
    );
};

export default Button;
