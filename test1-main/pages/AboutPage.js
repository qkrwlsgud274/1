import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import data from "../data.json";
import Loading from "./Loading";

export default function MainPag({ navigation, route }) {
  console.disableYellowBox = true;

  const [state, setState] = useState([]);

  const [cateState, setCateState] = useState([]);

  const [ready, setReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      navigation.setOptions({
        title: "Translator",
      });

      let tip = data.tip;
      setState(tip);
      setCateState(tip);
      setReady(false);
    }, 1500);
  }, []);

  return ready ? (
    <Loading />
  ) : (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.aboutButton}
        onPress={() => {
          navigation.navigate("AboutPage");
        }}>
        <Text style={styles.aboutButtonText}>채팅방 만들기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  aboutButton: {
    backgroundColor: "black",
    width: 300,
    height: 80,
    borderRadius: 10,
    alignSelf: "flex-end",
    marginRight: 50,
    marginTop: 250,
  },
  aboutButtonText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 15,
    fontSize: 35,
  },
});
