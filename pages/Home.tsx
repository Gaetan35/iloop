import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from '../components/common/Button';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Analyser</Text>
                <Text style={styles.subtitle}>vos produits électroniques</Text>
            </View>
            <View style={styles.centered}>
                <Button
                    label={'SCANNER UN PRODUIT'}
                    subtitle={'Code barre ou QR code'}
                    onPress={() => {
                        navigation.navigate('ScanProduct');
                    }}
                    containerStyle={styles.buttonContainer}
                    textStyle={styles.buttonText}
                    subtitleStyle={{ fontSize: 10, color: 'white', textAlign: 'center' }}
                />

                <Button
                    label={'RECHERCHER UN PRODUIT'}
                    onPress={() => {
                        navigation.navigate('SearchProduct');
                    }}
                    containerStyle={[styles.buttonContainer, { marginTop: 10 }]}
                    textStyle={styles.buttonText}
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
    buttonContainer: {
        backgroundColor: '#0d47a1',
        padding: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});

export default Home;
