import { View, Text, FlatList } from 'react-native'
import React from 'react'
import foodItems from '@/assets/data/products'
import ProductItem from '@/src/components/ProductItem'

const Menu = () => {
  return (
    <FlatList 
    data={foodItems}
    renderItem={({item}) => <ProductItem item={item} />}
    numColumns={2}
    contentContainerStyle={{ gap: 10, padding: 10 }}
    columnWrapperStyle={{ gap: 10 }}
    />
  )
}

export default Menu