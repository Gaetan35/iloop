import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Product } from './SearchProduct';
import Button from '../components/common/Button';
import { Entypo } from '@expo/vector-icons';

const ViewProduct = () => {
    const route: RouteProp<{ params: Product }, 'params'> = useRoute()
    const { name, brand, imageURLs, rating } = route.params;
    const Icon = <Entypo name="chevron-right" size={24} color="black" />
    return (
        <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
            <View
                style={styles.header}
            >
                <Image style={styles.image} source={{ uri: imageURLs }} />
                <View style={styles.content_container}>
                    <Text style={styles.name_text} numberOfLines={4}>
                        {name}
                    </Text>
                    <Text style={styles.rating_text}>{rating.toFixed(2)} / 5</Text>
                    <Text style={styles.brand_text}>{brand}</Text>
                </View>
            </View>
            <View style={{flex: 3, alignItems: 'center'}}>
                <Button
                    label={'Empreinte carbone'}
                    onPress={()=>{}}
                    containerStyle={styles.buttonContainer}
                    textStyle={styles.buttonText}
                    icon={Icon}
                />
                <Button
                    label={'Réparabilité'}
                    onPress={()=>{}}
                    containerStyle={styles.buttonContainer}
                    textStyle={styles.buttonText}
                    icon={Icon}
                />
                <Button
                    label={'Recyclage'}
                    onPress={()=>{}}
                    containerStyle={styles.buttonContainer}
                    textStyle={styles.buttonText}
                    icon={Icon}
                />
                <Button
                    label={'Avis Clients'}
                    onPress={()=>{}}
                    containerStyle={styles.buttonContainer}
                    textStyle={styles.buttonText}
                    icon={Icon}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 130,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        margin: 10
    },
    image: {
        width: 120,
        height: 120,
        margin: 5,
        backgroundColor: 'gray',
    },
    content_container: {
        flex: 1,
        margin: 5,
    },
    name_text: {
        fontWeight: 'bold',
        fontSize: 17,
        flexWrap: 'wrap',
        paddingRight: 5,
        textAlign: 'justify',
    },
    rating_text: {
        fontStyle: 'italic',
        color: '#666666',
    },
    brand_text: {
        textAlign: 'right',
        fontSize: 14,
    },
    buttonContainer: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 15,
        width: '95%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20
    }
});

export default ViewProduct;
