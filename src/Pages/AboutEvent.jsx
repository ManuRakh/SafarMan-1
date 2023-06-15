import { useNavigation, useRoute  } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header from "../Components/Header/Header";
import EventIco from "../Components/EventIco/EventIco";


export default function AboutEvent() {
  const route = useRoute();
  const el = route.params.el;
  const navigation = useNavigation();
  return (
    <View style={{marginTop:'90px'}}>
      <Header />
     <TouchableOpacity onPress={() => navigation.goBack()}>
     <Text style={{fontSize:'30px' , marginLeft:'20px' , marginTop:'20px'}}>←</Text>
     </TouchableOpacity>
      <View>
        <Image
          style={{
            marginHorizontal: "auto",
            width: 270,
            height: 200,
            borderRadius: "5px",
            marginTop: "38px",
          }}
          source={{ uri: el.ImagePoster }}
        />

        <View
          style={{
            alignItems: "start",
            marginHorizontal: "auto",
            width: "270px",
          }}
        >
          <Text
            style={{
              fontSize: "16px",
              fontFamily: "Montserrat_500Medium",
              marginTop: "15px",
            }}
          >
            {el.Title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Montserrat_400Regular",
              marginTop: "17px",
            }}
          >
            {el.Description}
          </Text>
          <EventIco ico={"calendar.svg"} text={el.DateAndTime} />
          <EventIco ico={"location.svg"} text={el.Location} />
          <EventIco ico={"profilecircle.svg"} text={el.Organizer} />
          <EventIco ico={"info.svg"} text={el.contact_information} />
          <EventIco ico={"ticketstar.svg"} text={el.TicketInformation} />
          <EventIco ico={"catg.svg"} text={el.EventCategory} />
          <EventIco ico={"website.svg"} text={el.EventWebsiteURL} />

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Image
              style={{ width: 18, height: 18, marginHorizontal: 7 }}
              source={require("../../assets/insta.svg")}
            />
            <Image
              style={{ width: 18, height: 18, marginHorizontal: 7 }}
              source={require("../../assets/facebook.svg")}
            />
            <Image
              style={{ width: 18, height: 18, marginHorizontal: 7 }}
              source={require("../../assets/youtube.svg")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
