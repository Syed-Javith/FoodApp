import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import { CartContext } from '../providers/CartProvider'
import CartListItem from '../components/CartListItem';

const cart = () => {
  const { items , total} = useContext(CartContext);
  return (
    <View>
      <FlatList 
        data={items}
        renderItem={ ({ item }) =>  {
          return  <CartListItem cartItem={item}  />
        }
        }
      />
      <Text>{total}</Text>
     <View style={{ width : "80%", alignItems : "center" }}>
     <Button 
        title='checkout'
      />
     </View>
    </View>
  )
}

export default cart

