import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductItem from '../components/Item'

const ItemDetailsScreen = (props) => {
    const { product, onAddToCartClicked, onAddToFavClicked } = props.route.params;
    const navigation = useNavigation();
//Favourite
    const addToCartAction = (
        <View>
            <Button 
                onPress={() => {
                    onAddToCartClicked(); 
                    navigation.navigate('Cart')
                }} 
                title={product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
            />
            <Text></Text>
            <Button 
                onPress={() => {
                    onAddToFavClicked();
                    navigation.navigate('Favourite')
                }} 
                title='Add to Favourite'
            />
        </View>
    )

    return (
        <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
            <ProductItem title={product.title} price={product.price} action={addToCartAction} />
        </View>
    )
}

export default ItemDetailsScreen;
