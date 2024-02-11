import { View, Text, Image, StyleSheet, Pressable, Button } from 'react-native'
import React from 'react'
import { Link, Stack, useLocalSearchParams } from 'expo-router'
import foodItems from '@/assets/data/products';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/src/constants/Colors';

const ProductDetailPage = () => {
    const { id } = useLocalSearchParams();
    const product = foodItems[parseInt(id.toString())-1]
    return (
        <View>
            <Stack.Screen options={{ title : product.name , 
      headerShown : true,
      headerRight: () => (
        <Link href={`/(admin)/menu/create?id=${id}`} asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="pencil-square-o"
                size={25}
                color={Colors.light.tint}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Link>
      ),
    } } />
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