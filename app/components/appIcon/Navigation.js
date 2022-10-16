import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuth from '../provider/useAuth';

import LoginScreen from '../screens/LoginScreen';
import AuthScreen from '../screens/AuthScreen';
import RegisterScreen from '../screens/RegisterScreen';
import BottomTabBar from '../components/BottomTabBar';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Stack.Navigator initialRouteName='Login'>
      {isLoggedIn ? (
        <>
          <Stack.Screen name='BottomTabBar' component={BottomTabBar} options={{ headerShown: false, }} />

        </>
      ) : (
        <>
          <Stack.Screen name='BottomTabBar' component={BottomTabBar} options={{ headerShown: false, }} />

          <Stack.Screen name='Auth' component={AuthScreen} options={{ headerShown: false, }} />
          <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false, }} />
          <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false, }} />

        </>
      )}
    </Stack.Navigator>
  )
}

export default Navigation