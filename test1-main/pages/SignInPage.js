import React, { useState,Component } from 'react'
import { StyleSheet, Text, View, Alert, TextInput, Button  } from 'react-native';
import axios from "axios" ;

export default class JoinScreen extends Component {
  state = {
    email: "",
    password: "",
  };

  changeEmail = (text) => {
    this.setState({ email: text });
  };

  changePassword = (text) => {
    this.setState({ password: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Voice Translator</Text>

        <TextInput
          placeholder="email"
          style={styles.textinput}
          onChangeText={this.changeEmail}
          value={this.state.email}
        />
        <TextInput
          placeholder="password"
          style={styles.textinput}
          onChangeText={this.changePassword}
          value={this.state.password}
        />
        <Button
          title="로그인"
          onPress={() => {
            axios.post('http://192.168.0.4:80/sum/', {
             one : "4",
             two : "10", 
            })
            .then(function(response){
              console.log(response.data['result']);
              Alert.alert(response.data['result']);
            })
            .catch(error => console.log("Error"))
          }}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  title: {
    margin: 3,
    fontSize: 30,
    fontSize: 20,
    fontWeight: "bold",
  },

  textinput: {
    backgroundColor: "#87ceeb",
    borderRadius: 10,
    width: "30%",
    height: "10%",
    marginBottom: 10,

    alignItems: "center",
  },
  buttonSize:{
    margin:10
  },
  button:{
    alignItems:"center",
    backgroundColor:"#DDDDDD",
    padding:10
  }
});
