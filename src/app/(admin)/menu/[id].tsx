import { View, Text, Image, StyleSheet, Pressable, Button } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import foodItems from '@/assets/data/products';

const ProductDetailPage = () => {
    const { id } = useLocalSearchParams();
    const product = foodItems[parseInt(id.toString())-1]
    return (
        <View>
            <Stack.Screen options={{ title: product.name }} />
            <Image
                source={{ uri: product.image }}
                height={200}
            // width={"100%"}
            />
            <Text style={style.productTitle}>{product.name}</Text>
            <Text style={style.price}> <Text style={{ fontWeight: "bold", fontSize: 24 }}>Rs.</Text> {product.price}</Text>
        </View>
    )
}

export default ProductDetailPage

const style = StyleSheet.create({
    productTitle: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10
    },
    price: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 18
    },
})