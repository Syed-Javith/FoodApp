import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { CartContext } from '../providers/CartProvider'
import CartListItem from '../components/CartListItem';

const cart = () => {
  const { items } = useContext(CartContext);
  return (
    <View>
      <FlatList 
        data={items}
        renderItem={ ({ item }) => <CartListItem cartItem={item} />}
      />
    </View>
  )
}

export default cart

