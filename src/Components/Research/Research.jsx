import React from 'react'
import { View } from 'react-native'
import Title from '../Title/Title'
import ResearchItem from '../ResearchItem/ResearchItem'

export default function Research() {
  return (
<View style={{justifyContent:'center' , alignItems:'center'}}>
    <Title ico={'research.svg'} title={'Исследуй c'} />
    <ResearchItem />
</View>
    )
}
