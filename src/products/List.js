import * as React from 'react';
import { Button, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

//import { addToCart } from '../actions'
import { getVisibleProducts } from './store/reducer';

// render item
const item = (product) => {
    const navigation = useNavigation();

    return(<View key={product.id}>
            <Button  onPress={() => navigation.navigate('Details', {product, onAddToCartClicked: e=>e})}>
                <Text>View Details</Text>
            </Button>
        </View>
    );
}

// default item list
const ListItemsScreen = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        if(authState.token !== "") {
          setRedirect(true);
        }
  
        dispatch(getVisibleProducts(products));
      },[products]);

    return (
      <SafeAreaView style={styles.container}>
        <Text>Items List</Text>
        {products.map(product => item(product))}
      </SafeAreaView>
    )
}

export default ListItemsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});
