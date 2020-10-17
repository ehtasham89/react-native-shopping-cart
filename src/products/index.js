import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListProduct from './List';
import Details from './Detail';

const ListItemsStack = createStackNavigator();

const ProductStack = () => {
   return (
     <ListItemsStack.Navigator>
      <ListItemsStack.Screen name="List" component={ListProduct} />
      <ListItemsStack.Screen name="Details" component={Details} />
     </ListItemsStack.Navigator>
    );
}

export default ProductStack;