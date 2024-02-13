import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { orders } from '@/assets/data/order'
import OrderList from '@/src/components/OrderList'

const Archieve = () => {
  return (
    <View style={{ marginVertical : 10 }} >
      <FlatList 
       data={orders}
       renderItem={({item}) => <OrderList order={item} key={item.id} />}
      />
    </View>
  )
}

export default Archieve