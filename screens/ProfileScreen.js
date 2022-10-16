import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}) => {
  const logout = () => {
    AsyncStorage.removeItem('token').then(() => { 
      navigation.push('Login');
    });
  };

  return (
    <View>
      <Text>

      </Text>
      <Button onPress={logout} title="Logout" color="#C98474" />

    </View>
  )
}

export default ProfileScreen