import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet
} from "react-native";
import { BottomNav } from './app/navigation/BottomNav';

import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic
} from '@expo-google-fonts/ubuntu';

const App = () => {

  const [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

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
