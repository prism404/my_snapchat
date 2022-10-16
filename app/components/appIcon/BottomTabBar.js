import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen';
import PhotoScreen from '../screens/PhotoScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabBar = ({route, navigation}) => {
    const {email} = route.params;

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name == 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name == 'Photo') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    } else if (route.name == 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }
                    return <Ionicons name={iconName} size={25} />
                }
            })}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{ title: email }} />
            <Tab.Screen name='Photo' component={PhotoScreen} options={{ headerShown: false, }}/>
            <Tab.Screen name='Profile' component={ProfileScreen} options={{ title: email }} />

        </Tab.Navigator>
    )
}

export default BottomTabBar