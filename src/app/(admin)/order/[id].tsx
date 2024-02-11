import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { orders } from '@/assets/data/order';
import OrderList from '@/src/components/OrderList';
import OrderedProducts from '@/src/components/OrderedProducts';

const Id = () => {
    const params = useLocalSearchParams();
    const id = params['id']
    if (!id) return;
    const order = orders.find((o) => o.id === parseInt(id + ""))
    if (order === undefined) return;
    return (
        <View>
            <OrderList order={order} />
            <FlatList
                data={order.order_items}
                renderItem={({item}) =>  <OrderedProducts orderItem={item} />}
            />
        </View>
    )
}

export default Id