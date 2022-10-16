import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet
} from "react-native";
import { BottomNav } from './app/navigation/BottomNav';

const App = () => {

  return (
    <NavigationContainer>
      <BottomNav />
      <StatusBar barStyle="dark-content"></StatusBar>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: "#FAF7F0",
    alignSelf: "flex-end",
    justifyContent: 'center'
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 30, 
    fontWeight: 'bold'
  },
  slideDefault: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  }
});

export default App
