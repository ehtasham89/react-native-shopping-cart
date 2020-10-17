import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Item = (props) => {
    const { price, quantity, title, action } = props
    
    return (
      <View>
        <View style={{paddingBottom: 20}}>
          <Text style={{fontSize: 26}}>{title} - &#36;{price} {quantity ? `x ${quantity}` : null} </Text>
        </View>
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