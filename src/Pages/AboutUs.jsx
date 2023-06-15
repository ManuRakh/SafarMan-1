import React from 'react'
import { View } from 'react-native'
import Header from '../Components/Header/Header'
import AboutItem from '../Components/AboutItem/AboutItem'

export default function AboutUs() {
  return (
    <View style={{marginTop:'90px'}}>
        <Header />
        <AboutItem />
    </View>
  )
}
