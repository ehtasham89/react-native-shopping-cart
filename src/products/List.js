import React from 'react';
import { Button, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, addToFav } from './store/action';
import { getVisibleProducts } from './store/reducer';

// render item
const item = (product) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const addToCartAction = (id) => dispatch(addToCart(id));
    const addToFavAction = (id) => dispatch(addToFav(id));

    return(<View key={product.id}>
            <Button  
                onPress={() => navigation.navigate('Details', {
                                                                product, 
                                                                onAddToCartClicked: () => addToCartAction(product.id),
                                                                onAddToFavClicked: () => addToFavAction(product.id)

                                                            })} 
                title={`${product.title} - View Detail`} 
            />
            <Text></Text>
        </View>
    );
}

// default item list
const ListItemsScreen = () => {
    //const dispatch = useDispatch();
    const productsState = useSelector(state => state.products);

    let products =  getVisibleProducts(productsState);

    return (
      <SafeAreaView style={styles.container}>
        <Text></Text>
        {products.map(product => item(product))}
      </SafeAreaView>
    )
}

export default ListItemsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});
