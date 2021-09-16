import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


export default function Loading(){
    return(<View style={styles.container}>

        <View style={styles.content}>
          <Image
            style={{height:'50%',width:'50%',resizeMode:'contain'}}
            source={require("../assets/a.png")}></Image>

              <View style={styles.title}>
          <Text style={{fontSize:30,color:'black'}}>voice Translator</Text>
        </View>

        </View>
        </View>
    );
  }
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
  title: {
    width:'40%',
    height:'40%',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom:30,
    backgroundColor: '#ffffff',
  }
 
});