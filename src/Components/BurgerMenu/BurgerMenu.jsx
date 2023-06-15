import React from "react";
import { StyleSheet, View, Image, Text , Picker } from "react-native";
import { useState } from "react";

import DropDownIcon from "../../../assets/arrowswapvertical.svg";

export default function BurgerMenu() {
  const [selectedValue, setSelectedValue] = useState('option1');
  
  return (
    <View style={styles.burgerMenu}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.close}
          source={require("../../../assets/closecircle.svg")}
        />
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
          <Text style={styles.navbarItem}>О нас</Text>
          <Text style={styles.navbarItem}>Помощь/Поддержка</Text>
        </View>
        <View>
          <Picker
            style={styles.picker}
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            dropdownIconColor="#000000"
            dropdownIconComponent={() => <DropDownIcon width={12} height={12} />}
          >
            <Picker.Item style={styles.pickerItem} label="Душанбе" value="option1" />
            <Picker.Item style={styles.pickerItem} label="Худжанд" value="option2" />
            <Picker.Item style={styles.pickerItem} label="Хатлон" value="option3" />
          </Picker>
          <View style={styles.langMain}>
<View style={styles.eng}>
EN
</View>
<View style={styles.ru}>
RU
</View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  burgerMenu: {
    width: "100%",
    height: "239px",
    backgroundColor: "white",
    position: "absolute",
    top: "0",
    position: "fixed",
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
    marginLeft: 10,
    marginTop: "34px",
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
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-evenly'   
  },
  navbarItem: {
    fontSize: '17px',
    color: '#000000',
    marginTop: '15px',
    fontFamily: 'Montserrat_600SemiBold'
  },
  picker: {
    marginTop: '15px',
    width: '105px',
    fontSize: '14px',
    backgroundColor: 'white',
    border: '2px solid black',
    borderRadius: '6px',
    padding: '5px',
    fontFamily: "Montserrat_500Medium",
  },
  pickerItem: {
    fontSize: '14px',
    color: '#000000',
    fontFamily: 'Montserrat_400Regular'
  },
  langMain:{
    width:'105px',
    height:'22px',
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:'6px',
    border:'1px black solid',
    marginTop:'15px',

  },
  eng:{
    width:'50%',
    backgroundColor:'#000000',
    color:'white',
    fontFamily: 'Montserrat_600SemiBold',
    textAlign:'center',
    borderRadius:'6px',
    border:'1px black solid'
  },
  ru:{
    width:'50%',
    backgroundColor:'#fff',
    color:'#000',
    fontFamily: 'Montserrat_600SemiBold',
    textAlign:'center',
    borderRadius:'6px',
    border:'1px white solid'
  }
});
