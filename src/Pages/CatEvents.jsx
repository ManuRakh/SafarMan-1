import React from 'react'
import { View } from 'react-native-web'
import Header from '../Components/Header/Header'
import CatEventsItem from '../Components/CatEventsItem/CatEventsItem'

export default function CatEvents() {
  return (
    <View style={{marginTop:'90px'}}>
        <Header />
        <CatEventsItem />
    </View>
  )
}
