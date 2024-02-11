import { View, Text, Image, StyleSheet, Pressable, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import foodItems from '@/assets/data/products';
import { CartContext } from '@/src/providers/CartProvider';
import { PizzaSize } from '@/src/types/types';

const ProductDetailPage = () => {
    const sizes : PizzaSize[] = ["S","M","L","XL"]
    const { id } = useLocalSearchParams();
    const product = foodItems[parseInt(id.toString())-1]
    const [selected,setSelected] = useState<PizzaSize>("S");
    const {addItem} = useContext(CartContext)
    return (
        <View>
            <Stack.Screen options={{ title: `${product.name} User` }} />
            <Image
                source={{ uri: product.image }}
                height={200}
            // width={"100%"}
            />
            <Text style={style.productTitle}>{product.name}</Text>

            {/* sizes */}
            <View style={style.SizeSheet}>
                {
                    sizes.map((size) => {
                        return <Pressable  onPress={() => setSelected(size)} style={[style.SizeBox , selected === size && style.selected]} key={size}>
                            <Text style={{ color : selected === size ? "white" : "black" }}>{size}</Text>
                        </Pressable>
                    })
                }
            </View>

            <Text style={style.price}> <Text style={{ fontWeight: "bold", fontSize: 24 }}>Rs.</Text> {product.price}</Text>
            <Pressable style={style.AddItemBtn}>
            <Button
                onPress={() => addItem(product , selected)}
                title='Add Item'
            />
            </Pressable>
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
    SizeSheet :{
        display : "flex",
        flexDirection : "row",
        gap : 4,
        marginVertical : 10,
        alignItems : "center",
        justifyContent : "space-around"
    },
    SizeBox : {
        backgroundColor : "#fff",
        padding : 10 ,
        borderRadius : 100 ,
        // width : 
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        height : 50 ,
        width : 50
    },
    selected : {
        
        backgroundColor : "blue"
    },
    AddItemBtn : {
        width : "80%",
        padding : 10,
        margin : "auto",
        alignSelf : "center",
        borderRadius : 100
    }
})