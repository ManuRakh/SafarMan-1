import React from "react";
import { View, TextInput, Image } from "react-native";
export default function Input({ ico, placeholder, value, onChangeText }) {
  return (
    <View
      style={{
        width: "265px",
        height: "30px",
        backgroundColor: "rgba(217, 217, 217, 0.36)",
        borderRadius: "10px",
        marginTop: "20px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Image
        style={{ width: "22px", height: "22px", marginLeft: "12px" }}
        source={require(`../../../assets/${ico}`)}
      />
      <TextInput
        style={{
          fontSize: "15px",
          fontFamily: "Montserrat_400Regular",
          border: "none",
          backgroundColor: "none",
          height: "30px",
          borderRadius: "10px",
          marginLeft: "15px",
          overflow: "hidden",
          flex: 1,
          outline: "none",
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
