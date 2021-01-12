import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class ReadStoryScreen extends React.Component{
    render() {
        return (
          <Text style = {{alignSelf:"center", marginTop:200}}>
            Hi this is the Read screen
          </Text>
        )
      }
}