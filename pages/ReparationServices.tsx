import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ReparationServices = () => {
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>
                Carte google maps avec les différents services de réparation près de chez
                l'utilisateur
            </Text>
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

export default ReparationServices;
