import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../Components/Header/Header";
import Input from "../Components/Input/Input";
import { useNavigation } from "@react-navigation/native";

export default function LoginWithMail() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onLoginPress = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      const urlencoded = new URLSearchParams();
      urlencoded.append("email", email);
      urlencoded.append("password", password);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      const response = await fetch(
        "http://194.67.97.108:3001/v1/login",
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigation.navigate("Main");
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
    <View style={{ marginTop: 90 }}>
      <Header />
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
          source={require(`../../assets/loginwithmail.svg`)}
        />
        <Text style={{ fontSize: 17, fontFamily: "Montserrat_600SemiBold" }}>
          Войдите с почтой/логином
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 100,
        }}
      >
        <Input
          ico={"mail.svg"}
          placeholder={"Введите почту/логин "}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          ico={"pswd.svg"}
          placeholder={"Введите пароль "}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        {error && (
          <Text
            style={{
              color: "red",
              fontSize: 12,
              fontFamily: "Montserrat_500Medium",
              marginBottom: 10,
            }}
          >
            {error}
          </Text>
        )}
        <TouchableOpacity
          style={{
            width: 140,
            height: 30,
            backgroundColor: "#FF862E",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
          }}
          onPress={onLoginPress}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontFamily: "Montserrat_500Medium",
            }}
          >
            Войти
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Reg")}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Montserrat_400Regular",
              marginTop: 5,
            }}
          >
            Нет Аккаунта?{" "}
            <Text style={{ color: "#FF862E" }}>Зарегистрируйся с почтой</Text>
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 12,
            width: 253,
            textAlign: "center",
            fontFamily: "Montserrat_500Medium",
            marginTop: 60,
          }}
        >
          Продолжая, вы соглашаетесь с условиями предоставления услуг{" "}
          <Text style={{ fontWeight: "bold" }}>SafarMan</Text>. Мы будем
          управлять информацией о вас, как описано в нашей{" "}
          <Text style={{ fontWeight: "bold" }}>
            Политике конфиденциальности, и Политика использования файлов cookie.
          </Text>
        </Text>
      </View>
    </View>
  );
}
