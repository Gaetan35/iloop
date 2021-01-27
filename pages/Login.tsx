import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const logo = require('../images/logo.png');
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('MainApp', { screen: 'Home' });
        }, 4000);
    }, []);
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.homeLogo} />
            <Text style={styles.homeText}>Bienvenue !</Text>
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
    homeLogo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    homeText: {
        marginTop: '10%',
        fontSize: 35,
    },
});

export default Login;
