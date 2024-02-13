import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={{  display : "flex" , flexDirection : "column" , alignItems : "center" , justifyContent : "center" , gap : 10  }}>
      <Link href={'/(user)'}>
        User
      </Link>
      <Link href={'/(admin)'}>
        admin
      </Link>
      <Link href={'/(auth)/signIn'}>
        Sign In
      </Link>
      <Link href={'/(auth)/signUp'}>
      Sign up
      </Link>
      <Link href={'/(user)/order/'}>
        Orders
      </Link>
    </View>
  )
}

export default index