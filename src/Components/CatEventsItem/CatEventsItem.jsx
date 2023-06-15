import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import config from "../../../config";

export default function CatEventsItem() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(config.EVENTS_API)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); 
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator
          size="large"
          color="#FF862E"
          style={{ marginTop: "20px" }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        padding: "20px",
      }}
    >
      {events.map((el) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("AboutEvent", { el })}
          key={el.id}
        >
          <View
            style={{
              width: "115px",
              height: "180px ",
              paddingBottom: "5px",
              border: "1px black solid",
              borderRadius: "5px",
              marginBottom: "20px",
              overflow: "hidden",
            }}
          >
            {el.ImagePoster ? (
              <Image
                source={{ uri: el.ImagePoster }}
                style={{ height: "85px", overflow: "hidden" }}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Photo not available</Text>
              </View>
            )}
            <Text
              style={{
                fontSize: "13px",
                marginLeft: 5,
                fontFamily: "Montserrat_500Medium",
              }}
            >
              {el.Title}
            </Text>
            <Text
              style={{
                fontSize: 8,
                fontFamily: "Montserrat_400Regular",
                padding: "3px",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                wordBreak: "break-word",
                WebkitLineClamp: 2,
              }}
            >
              {el.Description}
            </Text>
            <View style={{ flexDirection: "row", marginBottom: "3px" }}>
              <Image
                style={{ width: "12px", height: "12px", marginLeft: "3px" }}
                source={require("../../../assets/calendar.svg")}
              />
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Montserrat_600Semibold",
                  marginLeft: "3px",
                }}
              >
                {el.DateAndTime}
              </Text>{" "}
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ width: "12px", height: "12px", marginLeft: "3px" }}
                source={require("../../../assets/location.svg")}
              />
              <Text
                style={{
                  fontSize: "8px",
                  fontFamily: "Montserrat_600Semibold",
                  marginLeft: "3px",
                }}
              >
                {el.Location}
              </Text>{" "}
            </View>
          </View>
        </TouchableOpacity>
      ))}
      {!isLoading && events.length === 0 && (
        <Text style={{ textAlign: "center" }}>Нет подключения к интернету</Text>
      )}
    </View>
  );
}
