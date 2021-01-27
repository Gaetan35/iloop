import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ReparationGuides = () => {
    return (
        <View style={styles.container}>
            <Text>Page qui présentera différents guides de réparation</Text>
            <Text style={{ fontSize: 10, color: 'grey' }}>Implémentation à venir</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ReparationGuides;
