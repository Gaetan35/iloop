import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Analyser</Text>
                <Text style={styles.subtitle}>vos produits électroniques</Text>
            </View>
            <View style={styles.centered}>
                <Button
                    label={'Scanner un produit code barre ou QR code'}
                    onPress={() => {
                        console.log('bouton appuyé');
                    }}
                    containerStyle={{ backgroundColor: 'blue', padding: 5 }}
                />

                <Button
                    label={'Rechercher un produit'}
                    onPress={() => {
                        console.log('bouton 2 appuyé');
                    }}
                    containerStyle={{ backgroundColor: 'blue', marginTop: 10, padding: 5 }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
    },
    header: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 20,
    },
    centered: {
        flex: 9,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        fontSize: 30,
        color: 'blue',
    },
    subtitle: {
        fontSize: 20,
    },
    button: {
        marginTop: 10,
    },
});

export default Home;
