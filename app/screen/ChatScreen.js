import React from "react";
import {  Flatlist, View, StyleSheet } from "react-native";
import { Chats } from "../chats/Chats";


const ChatScreen = () => {
  return (
    <View>
        <Chats></Chats>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});
