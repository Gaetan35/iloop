import React from 'react';
import { TouchableOpacity, Text, StyleProp, TextStyle, ViewStyle } from 'react-native';

const Button = (props: {
    label: string;
    onPress: () => void;
    subtitle?: string;
    textStyle?: StyleProp<TextStyle>;
    subtitleStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    icon?: any
}) => {
    const { label, onPress, subtitle, textStyle, subtitleStyle, containerStyle, icon } = props;
    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <Text style={textStyle}>{label}</Text>
            {subtitle && <Text style={subtitleStyle}>{subtitle}</Text>}
            {icon}
        </TouchableOpacity>
    );
};

export default Button;
