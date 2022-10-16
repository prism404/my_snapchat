import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

export const Chats = ({name, timeAgo}) => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.container}>
                <View style={styles.user}>
                    <View style={styles.iconContainer}>
                        <AntDesign name="user" size={20} color="red" />
                    </View>
                    
                    <View>
                        <Text style={styles.title}>Prism User</Text>
                        <View style={styles.newContainer}>
                            <View style={styles.newSnap}/>
                                <Text>New Snap . 2 min ago</Text>
                            </View>
                        </View>
                    </View>

            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    user: {
        flexDirection: "row",
        alignItems: 'center'
    },
    title: {
        fontSize: 20
    },
    iconContainer: {
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
        padding: 10,
        borderColor: 'red',
        borderWidth: 2,
        marginRight: 10
    },
    newContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    newSnap: {
        width: 25,
        height: 25,
        borderRadius: 5,
        backgroundColor: 'red',
        marginRight: 10,
        marginVertical: 5
    }
})