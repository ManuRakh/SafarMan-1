import React from 'react'
import Header from '../Components/Header/Header'
import Category from '../Components/Category/Category'
import Research from '../Components/Research/Research'
import Event from '../Components/Event/Event'
import InterestingPlaces from '../Components/InterestingPlaces/InterestingPlaces'
import { View } from 'react-native'
export default function Main() {
  return (
   <View>
    <Header />
    <Category />
    <Research />
    <Event />
    <InterestingPlaces />
   </View>
  )
}
