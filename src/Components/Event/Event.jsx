import React from 'react'
import { View , Image , Text} from 'react-native'
import Title from '../Title/Title'

export default function Event() {
  return (
   <View style={{justifyContent:'start' , alignItems:'center'}}>
    <Title ico={'event.svg'} title={'Мероприятие'} />
 
        <View style={{width:'89px' , height:'61px' ,justifyContent:'center', alignItems:'center' , border:'1px black solid' , borderRadius:'10px'}}> 
    <Image style={{width:'25px' , height:'25px'}} source={require('../../../assets/addcircle.svg')} />
    <Text style={{fontSize:'10px' , color:'#5E5B5B' , fontFamily:'Montserrat_400Regular'}}>Добавь своё </Text>
     
    </View>
   </View>
  )
}
