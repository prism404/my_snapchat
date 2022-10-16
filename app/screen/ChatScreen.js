import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Chats } from '../chats/Chats';

const ChatScreen = () => {
    return (
        <View style={{ flex: 1,
        backgroundColor: 'black' }}>
            <Chats/>
        </View>
    )
}

export default ChatScreen;