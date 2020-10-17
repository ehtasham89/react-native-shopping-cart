import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Item = (props) => {
    const { price, quantity, title, action } = props
    
    return (
      <View>
        <Text>{title} - &#36;{price} {quantity ? `x ${quantity}` : null} </Text>
        <View>{action}</View>
      </View>
    )
  
}

export default Item;

Item.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  action: PropTypes.node,
}