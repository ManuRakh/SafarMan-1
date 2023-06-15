import React from 'react'
import { View } from 'react-native'
import Header from '../Components/Header/Header'
import SignUpItem from '../Components/SignUpItem/SignUpItem'

export default function SignUp() {
  return (
    <View style={{marginTop:'90px'}}>
        <Header />
        <SignUpItem />
    </View>
  )
}
