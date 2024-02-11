import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { OrderItem } from '../types/types'
import Colors from '../constants/Colors'

const OrderedProducts = ({ orderItem }: { orderItem: OrderItem }) => {
    return (
        <View style={style.List} >
            <Image
                source={{ uri: orderItem.products.image }}
                height={50}
                width={50}
            />
            <View style={style.Mid} >
                <Text style={style.MidTitle} >{orderItem.products.name} </Text>
                <View style={style.MidBottom}>
                    <Text style={style.Price} > Rs.{orderItem.products.price} </Text>
                    <Text> {orderItem.size} </Text>
                </View>
            </View>
            <View>
                <Text>{orderItem.quantity}</Text>
            </View>
        </View>
    )
}

export default OrderedProducts

const style = StyleSheet.create({
    List: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: 10,
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: 10
    },
    Mid: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 15
    },
    MidBottom: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
    },
    MidTitle: {
        fontWeight: "bold",
        fontSize: 18
    },
    Price: {
        color: Colors.light.tint,
        fontWeight: "bold"
    }
})