import React from 'react'
import { View ,Image , Text } from 'react-native'
import { researchData } from '../../researchs'

export default function ResearchItem() {
  return (
    <View style={{flexDirection:'row' , width:'266px' , justifyContent:'space-between' , paddingTop:'12px' }}>
        {researchData.map(el => {
            return(
                <View style={{width:'70px' , height:'80px'}}> 
                    <Image style={{width:'60px' , height:'60px' , borderRadius:'50px'}} source={require(`../../../assets/${el.img}`)} />
                    <Text style={{fontSize:'13px' , fontFamily:'Montserrat_400Regular'}}>{el.name}</Text>
                    </View>
            )
        })}
    </View>
    )
}
