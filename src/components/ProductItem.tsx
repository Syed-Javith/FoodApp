import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Product } from '@/src/types/types'
import { Link, useSegments } from 'expo-router'

const ProductItem = ({ item }: { item: Product }) => {
    const s = useSegments();
    console.log(s);
    
    return (
        <Link href={`/${s[0] === "(user)" ? "(user)" : "(admin)"}/menu/${item.id}`} asChild>
            <Pressable style={style.List}>
                <Image source={{ uri: item.image }} height={100} width={100} />
                <Text style={style.title}>{item.name}</Text>
                <Text style={style.price}>
                    <Text style={{ fontWeight: "bold" }}>Rs.</Text>
                    {item.price}
                </Text>
            </Pressable>
        </Link>

    )
}

export default ProductItem

const style = StyleSheet.create({
    List: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 20,
        margin: 4,
        flex: 1,
        maxWidth: '50%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 10
    },
    price: {
        fontSize: 20
    }
})