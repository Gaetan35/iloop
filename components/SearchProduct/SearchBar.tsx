import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = (props: {
    placeholder: string;
    onChangeText: (text: string) => void;
    onSubmitEditing?: () => void;
}) => {
    const { placeholder, onChangeText, onSubmitEditing } = props;
    return (
        <View style={styles.searchSection}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
            />
            <AntDesign
                style={styles.searchIcon}
                name="search1"
                size={20}
                color="black"
                onPress={onSubmitEditing}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 0,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        color: '#424242',
    },
});

export default SearchBar;
