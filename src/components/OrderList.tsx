import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Order } from '../types/types'
import relativeTime from "dayjs/plugin/relativeTime"
import dayjs from 'dayjs'
import Colors from '../constants/Colors'
import { Link } from 'expo-router'

dayjs.extend(relativeTime)

const OrderList = ({ order }: { order: Order }) => {
  return (
    <Link href={`/(user)/order/${order.id}`} asChild>
      <Pressable style={style.OrderList} >
        <View>
          <Text style={style.OrderHeader} >Order #{order.id}</Text>
          <Text style={style.Days} >{dayjs(order.created_at).fromNow()}</Text>
        </View>
        <Text style={style.Status} >{order.status}</Text>
      </Pressable>
    </Link>
  )
}

export default OrderList

const style = StyleSheet.create({
  OrderList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 15,
    margin: 5,
    padding: 15
  },
  OrderHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10
  },
  Days: {
    color: "grey"
  },
  Status: {
    color: Colors.light.tint
  }
})