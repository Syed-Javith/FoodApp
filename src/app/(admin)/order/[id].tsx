import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { orders } from '@/assets/data/order';
import OrderList from '@/src/components/OrderList';
import OrderedProducts from '@/src/components/OrderedProducts';
import OrderStatus from '@/src/components/OrderStatus';
import Colors from '@/src/constants/Colors';
import { TabBar } from 'react-native-tab-view';

const Id = () => {
    const params = useLocalSearchParams();
    const id = params['id']
    const statuses : ("New" | "Cooking" | "Delivering" | "Delivered")[] = ['New' , 'Cooking' , 'Delivering' , 'Delivered']
    if (!id) return;
    const order = orders.find((o) => o.id === parseInt(id + ""))
    if (order === undefined) return;
    const [currentStatus , setCurrentStatus] = useState(order?.status)
    return (
        <View>
            <Stack.Screen options={{ title : `${id} - Admin` }} />
            <OrderList order={order} />
            <FlatList
                data={order.order_items}
                renderItem={({ item }) => <OrderedProducts orderItem={item} />}
                ListFooterComponent={() =>
                    <>
                        <View style={{ display : "flex" , flexDirection : "row" , gap : 10 , margin : 10 }} >
                        {
                            statuses.map((status) => {
                                return <Pressable style={{ backgroundColor : currentStatus === status ? Colors.light.tint : "" ,borderColor : Colors.light.tint , borderWidth : 2 , borderRadius : 15 , padding : 10 }} onPress={() => setCurrentStatus(status)} key={status}>
                                        <Text style={{ fontSize : 15 , color : currentStatus === status ? "white" : "black"  }} >{status}</Text>
                                </Pressable>
                            })
                        }
                        </View>
                    </>
                    }
                    
            />
        </View>
    )
}

export default Id