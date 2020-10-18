import React from 'react';
import { Button, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { removeFromFav } from './../products/store/action';
import { getFavProducts } from './store/reducer';

// render item
const item = (product) => {
    const dispatch = useDispatch();
    const removeFromCartAction = (id) => dispatch(removeFromFav(id));

    return(<View key={product.id}>
            <Button  
                onPress={e => dispatch(removeFromCartAction(product.id))}
                title={`${product.title} - Remove From Favourite`} 
            />
            <Text></Text>
        </View>
    );
}

//favourite item list
const FavItemsScreen = () => {
    const getState = useSelector(state => state);

    let products =  getFavProducts(getState);

    return (
      <SafeAreaView style={styles.container}>
        <Text style={{fontSize: 30, textAlign: "center", paddingBottom: 20}}>Favourite Items</Text>
        {products.map(product => item(product))}
      </SafeAreaView>
    )
}

export default FavItemsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});
