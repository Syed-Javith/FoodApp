import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { Link, Stack } from 'expo-router';
import Colors from '@/src/constants/Colors';

const signIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={style.form} >
            <Stack.Screen options={{ title : "Sign in" }} />
            <Text style={style.label} >Sign In</Text>
            <View>
                <Text style={style.label}>
                    Email
                </Text>
                <TextInput
                    placeholder='enter your email'
                    value={email}
                    onChangeText={setEmail}
                    style={style.Input}
                />
            </View>
            <View>
                <Text style={style.label}>
                    Password
                </Text>
                <TextInput
                    placeholder='enter your pasword'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    style={style.Input}
                />
            </View>
            <View style={style.Btn}>
                <Button
                    title='sign in'
                />
            </View>
            <View style={style.Btn} >
               <Link style={{ color : Colors.light.tint, fontSize : 15 , textAlign : "center" }} href={'/(auth)/signIn'}>
                Sign in
               </Link>
            </View>
        </View>
    )
}

export default signIn

const style = StyleSheet.create({
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 30,
        width: "80%",
        margin: "auto",
        padding: 20
    },
    label: {
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 8
    },
    Input: {
        fontSize: 15,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        width: 300
    },
    Btn : {
        width : 200 ,
        borderRadius : 15,
    }
})