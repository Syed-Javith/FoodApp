import { View, Text, Image, Button, StyleSheet } from 'react-native'
import React from 'react'
import { CartItem } from '../types/types'
import { FontAwesome } from '@expo/vector-icons'

const CartListItem = ({ cartItem }: { cartItem: CartItem }) => {
    return (
        <View style={style.ListCard} >
            <View>
                <Image
                    source={{ uri: cartItem.product.image }}
                    height={100}
                    width={100}
                />
            </View>
            <View style={style.MiddlePart} >
                <Text style={style.CardTitle}>{cartItem.product.name}</Text>
                <Text>Rs.{cartItem.product.price}</Text>
                <Text>Size : {cartItem.size}</Text>
            </View>
            <View style={style.LastPart}>
                <FontAwesome 
                name='plus'
                />
                <Text>{cartItem.quantity}</Text>
                <FontAwesome
                name='minus'
                />
            </View>
        </View>
    )
}

export default CartListItem

const style = StyleSheet.create({
    ListCard : {
      display : "flex",
      flexDirection : "row",
      gap : 10 ,
      padding : 10,
      backgroundColor : "#fff",
      margin : 10,
      borderRadius : 15
    },
    CardTitle : {
        fontWeight : "bold",
        fontSize : 25,
        margin : "auto",
    },
    MiddlePart : {
        flex : 1
    },
    LastPart : {
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        gap : 15,
        padding : 10
    },
  })