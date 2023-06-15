import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import Input from "../Input/Input";
import Title from "../Title/Title";
import { useNavigation } from "@react-navigation/native";

export default function SignUpItem() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const onSignUpPress = async () => {
    try {
      const response = await fetch("http://194.67.97.108:3001/v1/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role: "traveler", // or "moderator" or "admin"
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
       
        navigation.navigate("Login");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 35,
        }}
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require(`../../../assets/signup.svg`)}
        />
        <Text style={{ fontSize: 17, fontFamily: "Montserrat_600SemiBold" }}>
          {" "}
          Регистрация
        </Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Input
          ico={"nameico.svg"}
          placeholder={"Полное имя на латинице"}
          value={name}
          onChangeText={setName}
        />
        <Input
          ico={"birthdayico.svg"}
          placeholder={"Дата Рождения 00/00/0000"}
        />
        <Input
          ico={"mail.svg"}
          placeholder={"Введите почту"}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          ico={"phone.svg"}
          placeholder={"Введите свой номер"}
          value={phone}
          onChangeText={setPhone}
        />
        <Input
          ico={"pswd.svg"}
          placeholder={"Введите пароль"}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Input
          ico={"pswd.svg"}
          placeholder={"Потвердите пароль"}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {error && (
          <Text style={{ color: "red", marginVertical: 10 }}>{error}</Text>
        )}
        <TouchableOpacity
          style={{
            width: 210,
            height: 30,
            backgroundColor: "#FF862E",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            marginTop: 15,
          }}
          onPress={onSignUpPress}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontFamily: "Montserrat_500Medium",
            }}
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Montserrat_400Regular",
              marginTop: 5,
            }}
          >
            Уже есть Аккаунт?{" "}
            <Text style={{ color: "#FF862E" }}>Тогда войдите</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
