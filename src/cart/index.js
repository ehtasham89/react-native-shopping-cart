import React from 'react';
import { Button, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { removeFromCart } from './../products/store/action';
import { getCartProducts } from './store/reducer';

// render item
const item = (product) => {
    const dispatch = useDispatch();
    const removeFromCartAction = (id) => dispatch(removeFromCart(id));

    return(<View key={product.id}>
            <Button  
                onPress={e => dispatch(removeFromCartAction(product.id))} 
                title={`${product.title} - Remove From Cart`} 
            />
            <Text></Text>
        </View>
    );
}

// default item list
const CartItemsScreen = () => {
    const getState = useSelector(state => state);

    let products =  getCartProducts(getState);

    return (
      <SafeAreaView style={styles.container}>
        <Text style={{fontSize: 30, textAlign: "center", paddingBottom: 20}}>Cart Items</Text>
        {products.map(product => item(product))}
      </SafeAreaView>
    )
}

export default CartItemsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});
