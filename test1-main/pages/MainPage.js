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

import Loading from "./Loading";

export default function MainPage({ navigation }) {
  const [ready, setReady] = useState(true);

  setTimeout(() => {
    setReady(false);
  }, 1000);

  return ready ? (
    <Loading />
  ) : (
    <View style={styles.contain}>
      <View style={styles.title}>
        <Text style={{ fontSize: 30, color: "black" }}>voice Translator</Text>
      </View>
      <TouchableOpacity
        style={styles.aboutButton2}
        onPress={() => {
          navigation.navigate("SignInPage");
        }}>
        <Text style={styles.aboutButtonText2}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.aboutButton3}
        onPress={() => {
          navigation.navigate("SignUpPage");
        }}>
        <Text style={styles.aboutButtonText2}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "60%",
    height: 30,
    alignItems: "flex-end",
    marginRight: 10,
    marginTop: 100,
  },
  title: {
    width: "40%",
    height: "40%",
    alignSelf: "flex-end",
    marginRight: 100,
    marginTop: 100,
  },
  aboutButton2: {
    backgroundColor: "black",
    width: 300,
    height: 80,
    borderRadius: 100,
    alignSelf: "flex-end",
    marginRight: 50,
    marginTop: 10,
  },
  aboutButtonText2: {
    color: "#fff",
    textAlign: "center",
    marginTop: 15,
    fontSize: 35,
  },
  aboutButton3: {
    backgroundColor: "black",
    width: 300,
    height: 80,
    borderRadius: 100,
    alignSelf: "flex-end",
    marginRight: 50,
    marginTop: 10,
  },
  aboutButtonText3: {
    color: "#fff",
    textAlign: "center",
    marginTop: 15,
    fontSize: 35,
  },
});
