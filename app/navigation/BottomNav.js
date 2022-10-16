import React from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../screen/MapScreen";
import CameraScreen from "../screen/Camera_screen";
import ChatScreen from "../screen/ChatScreen";
import StoriesScreen from "../screen/StoriesScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const BottomNav = () => {

    const Icons = {
        Map: "md-location-outline",
        Chat: "chatbubble-outline",
        Camera: "camera-outline",
        Users: "people-circle"
    }

  return (
    <Tab.Navigator screenOptions={({route}) => {
        return {
            tabBarIcon: ({size, color}) => {
                const iconName = Icons[route.name];
                return <Ionicons name={iconName} size={size} color={color}></Ionicons>
            }
        }
    }}>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Users" component={StoriesScreen} />
  </Tab.Navigator>
  )
};
