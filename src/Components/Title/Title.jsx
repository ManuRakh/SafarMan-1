import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function Title({ico , title}) {
  return (
    <View style={{ flexDirection: "row" ,width:'266px'  ,justifyContent:'start', marginTop:'17px'}}>
      <Image
        style={styles.ico}
        source={require(`../../../assets/${ico}`)}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ico: {
    width: "30px",
    height: "30px",
  },
  title:{
    fontSize:'17px',
    color:'black',
    fontFamily:'Montserrat_600SemiBold',
    marginLeft:'10px'
    
  }
});
