import React from "react";
import { View, Image, Text } from "react-native";

export default function EventIco({ ico, text }) {
  return (
    <View style={{flexDirection:'row' , marginTop:10}}>
      <Image
        style={{ width: 18, height: 18 }}
        source={require(`../../../assets/${ico}`)}
      />
      <Text style={{ fontSize: 12, fontFamily: "Montserrat_600SemiBold" , marginLeft:4 }}>
        {text}
      </Text>
    </View>
  );
}
