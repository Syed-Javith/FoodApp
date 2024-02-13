import { View, Text, TextInput, StyleSheet, Button, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { Link, Stack } from 'expo-router';
import Colors from '@/src/constants/Colors';
import { supabase } from '@/src/lib/supabase';

const signUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false)
  const signUpUser = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <View style={style.form} >
      <Stack.Screen options={{ title: "Sign up" }} />
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
      {/* <View style={style.Btn}>
        <Button
          title='sign in'
        />
      </View> */}
      <Pressable disabled={loading} onPress={signUpUser} style={style.Btn} >
        <Text style={{ color: Colors.light.tint, fontSize: 15, textAlign: "center" }}>
          { loading ? "Creating..." : "Create account" }
        </Text>
      </Pressable>
    </View>
  )
}

export default signUp

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
  Btn: {
    width: 200,
    borderRadius: 15,
  }
})