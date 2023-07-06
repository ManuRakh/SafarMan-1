import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Picker,
} from "react-native";

import DropDownIcon from "../../../assets/arrowswapvertical.svg";
import { useNavigation } from "@react-navigation/native";
const Header = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("option1");
  const [menuPosition, setMenuPosition] = useState(-400);
  const headerRef = useRef(null);
  
  function handleOpen() {
    setMenuPosition(0);
  }

  function handleClose() {
    setMenuPosition(-400);
  }

  return (
    <View style={styles.container} ref={headerRef}>
      <View style={styles.left}>
        <TouchableOpacity onPress={handleOpen}>
          <Image
            source={require("../../../assets/hambergermenu.svg")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}></View>
            <View>
              <Text style={styles.title}>SafarMan</Text>
              <Text style={styles.subtitle}>Душанбе</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        <Image
          source={require("../../../assets/searchstatus.svg")}
          style={styles.icon}
        />
        <TouchableOpacity onPress={() => {
          /**
           * session.get("token") - получаем JWT токен из session storage
           * Если токена нету, то переводим на страницу логина navigation.navigate("Login")
           * Если срок токена прошел - переводим на страницу логина navigation.navigate("Login")
           * Если токен есть, то переводим на страницу профиля navigation.navigate("UserProfile")
           * Парсим содержимое JWT токена и вытаскиваем оттуда User информацию.
           */
          navigation.navigate("Login")
        }}>
          <Image
            source={require("../../../assets/user.svg")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.burgerMenu, { top: menuPosition }]}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={handleClose}>
            <Image
              style={styles.close}
              source={require("../../../assets/closecircle.svg")}
            />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <View style={styles.logo}></View>
            <View>
              <Text style={styles.title}>SafarMan</Text>
              <Text style={styles.subtitle}>Душанбе</Text>
            </View>
          </View>
        </View>
        <View style={styles.navbar}>
          <View>
            <Text style={styles.navbarItem}>Твой город</Text>
            <Text style={styles.navbarItem}>Языки</Text>
            <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
              <Text style={styles.navbarItem}>О нас</Text>
            </TouchableOpacity>
            <Text style={styles.navbarItem}>Помощь/Поддержка</Text>
          </View>
          <View>
            <Picker
              style={styles.picker}
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              dropdownIconColor="#000000"
              dropdownIconComponent={() => (
                <DropDownIcon width={12} height={12} />
              )}
            >
              <Picker.Item
                style={styles.pickerItem}
                label="Душанбе"
                value="option1"
              />
              <Picker.Item
                style={styles.pickerItem}
                label="Худжанд"
                value="option2"
              />
              <Picker.Item
                style={styles.pickerItem}
                label="Хатлон"
                value="option3"
              />
            </Picker>
            <View style={styles.langMain}>
              <View style={styles.eng}>EN</View>
              <View style={styles.ru}>RU</View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
    zIndex: "2",
    top:0,
    width:'100%',
    backgroundColor: "white",
    shadowColor: "#000",
    position:'fixed',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: "18px",
  },

  logo: {
    width: 40,
    height: 40,
    backgroundColor: "gray",
    borderRadius: 40,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 17,
    marginLeft: 7,
  },
  subtitle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 13,
    marginLeft: 7,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  burgerMenu: {
    width: "100%",
    height: "239px",
    backgroundColor: "white",
    position: "absolute",
    top: "-300px",
    position: "fixed",
    zIndex: "1",
  },
  close: {
    width: "25px",
    height: "25px",
    marginTop: "42px",
    marginLeft: "18px",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    backgroundColor: "gray",
    borderRadius: 40,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 17,
    marginLeft: 7,
  },
  subtitle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 13,
    marginLeft: 7,
  },
  navbar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  navbarItem: {
    fontSize: "17px",
    color: "#000000",
    marginTop: "15px",
    fontFamily: "Montserrat_600SemiBold",
  },
  picker: {
    marginTop: "15px",
    width: "105px",
    fontSize: "14px",
    backgroundColor: "white",
    border: "2px solid black",
    borderRadius: "6px",
    padding: "5px",
    fontFamily: "Montserrat_500Medium",
  },
  pickerItem: {
    fontSize: "14px",
    color: "#000000",
    fontFamily: "Montserrat_400Regular",
  },
  langMain: {
    width: "105px",
    height: "22px",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "6px",
    border: "1px black solid",
    marginTop: "15px",
  },
  eng: {
    width: "50%",
    backgroundColor: "#000000",
    color: "white",
    fontFamily: "Montserrat_600SemiBold",
    textAlign: "center",
    borderRadius: "6px",
    border: "1px black solid",
  },
  ru: {
    width: "50%",
    backgroundColor: "#fff",
    color: "#000",
    fontFamily: "Montserrat_600SemiBold",
    textAlign: "center",
    borderRadius: "6px",
    border: "1px white solid",
  },
});

export default Header;
