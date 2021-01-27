import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Product } from '../../pages/SearchProduct';

const ProductItem = (props: Product) => {
    const { name, brand, imageURLs, rating } = props;
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.main_container}
            onPress={() => {
                navigation.navigate('ViewProduct', props);
            }}
        >
            <Image style={styles.image} source={{ uri: imageURLs }} />
            <View style={styles.content_container}>
                <Text style={styles.name_text} numberOfLines={4}>
                    {name}
                </Text>
                <Text style={styles.rating_text}>{rating.toFixed(2)} / 5</Text>
                <Text style={styles.brand_text}>{brand}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    main_container: {
        height: 130,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'lightgrey',
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
});

export default ProductItem;
