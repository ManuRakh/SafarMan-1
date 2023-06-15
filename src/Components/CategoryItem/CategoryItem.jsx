import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import config from "../../../config";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const CategoryItem = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(config.CATEGORIES_API)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  function reConnect() {}
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#FF862E" />
        </View>
      ) : error ? (
        <View style={styles.error}>
          <Text>Нет подключение к интернету</Text>
          <Button title="Повторите запрос" onPress={reConnect} />
        </View>
      ) : (
        <View style={styles.categories}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => navigation.navigate("CatEvents")}
            >
              <View style={styles.category}>
                {category.img ? (
                  <Image source={{ uri: category.img }} style={styles.image} />
                ) : (
                  <View style={styles.placeholder}>
                    <Text style={styles.placeholderText}>
                      Изоброжение не загрузилась
                    </Text>
                  </View>
                )}
                <Text style={styles.name}>{category.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "266px",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  category: {
    width: "118px",
    height: "90px",
    marginVertical: "10px",
  },
  image: {
    width: "100%",
    height: "73px",
    borderRadius: 5,
  },
  placeholder: {
    backgroundColor: "#EFEFEF",
    width: "100%",
    height: "73px",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    color: "#555",
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
  name: {
    fontSize: 13,
    fontFamily: "Montserrat_400Regular",
    textAlign: "center",
  },
});

export default CategoryItem;
