import React from "react";
import { View, Image, Text } from "react-native";

export default function AboutItem() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "35px",
        }}
      >
        <Image
          style={{ width: "30px", height: "30px" }}
          source={require(`../../../assets/about.svg`)}
        />
        <Text
          style={{ fontSize: "17px", fontFamily: "Montserrat_600SemiBold" }}
        >
          {" "}
          О нас
        </Text>
      </View>
      <Text
        style={{
          width: "296px",
          marginTop: "30px",
          fontSize: "17px",
          fontFamily: "Montserrat_600SemiBold",
          textAlign: "justify",
        }}
      >
        Добро пожаловать в SafarMan, вашего лучшего компаньона для городской
        жизни в Таджикистане. Запущенный в 2023 году, мы соединяем вас с яркими,
        невидимыми аспектами наших городов с помощью уникального сочетания
        открытий и социальных сетей. От местных событий, фестивалей и выставок
        до богатой истории и разнообразных кулинарных сцен, наше приложение
        открывает целый новый мир прямо у вас под рукой. SafarMan выходит за
        рамки простого открытия - мы создаем сообщество, способствуя связям и
        формированию групп вокруг общих интересов. Наша преданная команда
        увлечена созданием обогащающего, удобного для пользователя опыта,
        который меняет ваше отношение к городам Таджикистана. Исследуйте,
        подключайтесь и взаимодействуйте с SafarMan. Добро пожаловать в будущее
        исследования города.
      </Text>
    </View>
  );
}
