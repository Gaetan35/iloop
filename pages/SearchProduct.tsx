import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ProductItem from '../components/SearchProduct/Product';
import SearchBar from '../components/SearchProduct/SearchBar';

export interface Product {
    id: string;
    name: string;
    brand: string;
    imageURLs: string;
    rating: number;
}

const SearchProduct = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchedProduct, setSearchedProduct] = useState<string>('');
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [productsDisplayed, setProductsDisplayed] = useState<Product[]>([]);

    useEffect(() => {
        const jsonProducts = require('../products.json');
        setAllProducts(jsonProducts);
        setProductsDisplayed(jsonProducts);
        setIsLoading(false);
    }, []);

    const onChangeText = (text: string) => {
        setSearchedProduct(text);
        if (searchedProduct === '') {
            setProductsDisplayed(allProducts);
        } else {
            setProductsDisplayed(
                allProducts.filter((product) =>
                    product.name.toLowerCase().includes(searchedProduct.toLowerCase())
                )
            );
        }
    };

    return (
        <View style={styles.container}>
            <SearchBar placeholder={'Entrez le produit recherché'} onChangeText={onChangeText} />
            {isLoading ? (
                <Text>En chargement</Text>
            ) : (
                <FlatList
                    data={productsDisplayed}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ProductItem
                            id={item.id}
                            name={item.name}
                            brand={item.brand}
                            imageURLs={item.imageURLs}
                            rating={item.rating}
                        />
                    )}
                    style={{ width: '100%' }}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

export default SearchProduct;
