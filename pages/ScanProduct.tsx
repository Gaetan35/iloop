import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ScanProduct = () => {
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>Page pour scanner QR code ou code barre</Text>
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

export default ScanProduct;
