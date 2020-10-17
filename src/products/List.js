import React, {useEffect} from 'react';
import { Button, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

//import { addToCart } from './store/actions'
import { getVisibleProducts } from './store/reducer';

// render item
const item = (product) => {
    const navigation = useNavigation();

    return(<View key={product.id} style={styles.btn}>
            <Button  
                onPress={() => navigation.navigate('Details', {product, onAddToCartClicked: e=>e})} 
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
    },
    btn: {
        //padding: "5px",
    },
});
