import * as React from 'react';
import { Button, Text, View } from 'react-native';
import ProductItem from '../components/Item'

const ItemDetailsScreen = (props) => {
    const { product, onAddToCartClicked } = props.route.params;

    const addToCartAction = (
        <Button 
            onPress={onAddToCartClicked(product.id)} 
            //disabled={product.inventory > 0 ? '' : 'disabled'} 
            title={product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        />
    )

    return (
        <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
            <ProductItem title={product.title} price={product.price} action={addToCartAction} />
        </View>
    )
}

export default ItemDetailsScreen;
