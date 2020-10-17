import * as React from 'react';
import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types'
import ProductItem from '../components/Item'

const ItemDetailsScreen = () => {

    const { product } = this.props
    const addToCartAction = (
      <Button onPress={this.props.onAddToCartClicked(product.id)} disabled={product.inventory > 0 ? '' : 'disabled'}>
        <Text>{product.inventory > 0 ? 'Add to cart' : 'Sold Out'}</Text>
      </Button>
    )

    return (
        <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
            <ProductItem title={product.title} price={product.price} action={addToCartAction} />
        </View>
    )
}

export default ItemDetailsScreen;

ItemDetailsScreen.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
}
