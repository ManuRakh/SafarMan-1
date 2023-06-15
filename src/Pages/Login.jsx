import React from 'react'
import { View } from 'react-native'
import Header from '../Components/Header/Header'
import LoginItem from '../Components/LoginItem/LoginItem'

export default function Login() {
  return (
    <View style={{marginTop:'90px'}}>
       <Header />
       <LoginItem />
    </View>
  )
}
