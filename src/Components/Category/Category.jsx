import React from 'react'
import { View } from 'react-native'
import Title from '../Title/Title'
import CategoryItem from '../CategoryItem/CategoryItem'

export default function Category() {
  return (
    <View style={{  justifyContent: 'center', alignItems: 'center' , zIndex:'0' , marginTop:'90px' }}>
  <Title ico={'catico.svg'} title={'Исследуй по категориям'}  />
  <CategoryItem />
</View>

  )
}
