import React, { Component } from "react";
import { StyleSheet, Text, Button, View, TextInput } from "react-native";

export default class JoinScreen extends Component {
  state = {
    Nickname: "",
    name: "",
    email: "",
    password: "",
    password2: "",
    language: "",
  };
  changeNickname = (text) => {
    this.setState({ Nickname: text });
  };
  changename = (text) => {
    this.setState({ name: text });
  };
  changeEmail = (text) => {
    this.setState({ email: text });
  };
  changePassword = (text) => {
    this.setState({ password: text });
  };
  changePassword2 = (text) => {
    this.setState({ password2: text });
  };
  changelanguage = (text) => {
    this.setState({ language: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>

        <TextInput
          placeholder="Nickname"
          style={styles.textinput}
          onChangeText={this.changeNickname}
          value={this.state.Nickname}
        />
        <TextInput
          placeholder="name"
          style={styles.textinput}
          onChangeText={this.changename}
          value={this.state.name}
        />
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
        <TextInput
          placeholder="password2"
          style={styles.textinput}
          onChangeText={this.changePassword2}
          value={this.state.password2}
        />

        <TextInput
          placeholder="language"
          style={styles.textinput}
          onChangeText={this.changelanguage}
          value={this.state.language}
        />

        <Button
          title="확인"
          onPress={() =>
            alert(`
                ${this.state.Nickname},
                ${this.state.name},
                ${this.state.email},
                ${this.state.password},
                ${this.state.password2},
                ${this.state.language}
                `)
          }
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
    margin: 30,
    fontSize: 30,
    fontSize: 20,
    fontWeight: "bold",
  },

  textinput: {
    backgroundColor: "#87ceeb",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
});
