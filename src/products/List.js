import * as React from 'react';
import { Button, Text, View } from 'react-native';

const ListItemsScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
        <Text>List Items</Text>
        <Button
          title="Go to Details Page"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
}

export default ListItemsScreen;