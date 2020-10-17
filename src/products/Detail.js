import * as React from 'react';
import { Button, Text, View } from 'react-native';
import ProductItem from '../components/Item'

const ItemDetailsScreen = (props) => {
    const { product, onAddToCartClicked, onAddToFavClicked } = props.route.params;

    const addToCartAction = (
        <View>
            <Button 
                onPress={onAddToCartClicked} 
                title={product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
            />
            <Text></Text>
            <Button 
                onPress={onAddToFavClicked} 
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
