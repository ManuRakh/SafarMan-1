import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../Header/Header";
import Title from "../Title/Title";
import { useNavigation } from "@react-navigation/native";

export default function LoginItem() {
  const navigation = useNavigation()
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center' , marginTop:'35px'}}>
        <Image
        style={{width:'30px' , height:'30px'}}
        source={require(`../../../assets/hello.svg`)}
      />
      <Text style={{fontSize:'17px' , fontFamily:'Montserrat_600SemiBold'}} >Снова Привет</Text> 

        </View>
      <Text
        style={{
          width: "259px",
          fontSize: 14,
          fontFamily: "Montserrat_500Medium",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Войти с OTP <br />
        Это берет 10 секунд войти с вашим номером телефона чтоб продолжить
        пользоваться
      </Text>
      <View
        style={{
          width: "265px",
          height: "30px",
          backgroundColor: "rgba(217, 217, 217, 0.36)",
          borderRadius: "10px",
          marginTop: "38px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: "20px",
            fontFamily: "Montserrat_600SemiBold",
            marginLeft: "15px",
          }}
        >
          +992
        </Text>
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
          }}
          placeholder="Номер телефона"
        />
      </View>
     <TouchableOpacity onPress={() => navigation.navigate("Reg")}>
     <Text
        style={{
          fontSize: "12px",
          fontFamily: "Montserrat_400Regular",
          marginTop: "5px",
        }}
      >
        Нет Аккаунта?{" "}
        <Text style={{ color: "#FF862E" }}>Зарегистрируйся с почтой</Text>
      </Text>
     </TouchableOpacity>
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
          marginTop: "15px",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontFamily: "Montserrat_500Medium",
          }}
        >
          Отправить ОТР
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: "42px",
          width: "265px",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom:'30px'
        }}
      >
        <Text style={{ fontSize: "14px", fontFamily: "Montserrat_500Medium" }}>
          Другие варианты Входа в аккаунт
        </Text>
        <Image
          style={{ width: "265px", height: "40px", marginTop: "20px" }}
          source={require("../../../assets/withgoogle.png")}
        />
        <Image
          style={{ width: "265px", height: "40px", marginTop: "20px" }}
          source={require("../../../assets/withfacebook.png")}
        />
       <TouchableOpacity onPress={() => navigation.navigate("LoginWithMail")}>
       <Text style={{ fontSize: "14px", color: "#FF862E", marginTop: "20px" }}>
          Войти с помощью логина/ почты
        </Text>
       </TouchableOpacity>
        <Text style={{fontSize:'12px' , textAlign:'center' , fontFamily:'Montserrat_500Medium' , marginTop:'60px' }}>
        Продолжая, вы соглашаетесь с условиями предоставления услуг <Text style={{fontWeight:'bold'}}>SafarMan</Text>. Мы
        будем управлять информацией о вас, как описано в нашей <Text style={{fontWeight:'bold'}}>Политике
        конфиденциальности, и Политика использования файлов cookie.</Text>
      </Text>
      </View>
      
    </View>
  );
}
