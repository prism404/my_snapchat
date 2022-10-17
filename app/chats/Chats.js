import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from "@expo/vector-icons";

export const Chats = ({name, timeAgo}) => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.container}>
                <View style={styles.contentContainer}>
                <View style={styles.user}>
                    <View style={styles.iconContainer}>
                        <AntDesign name="user" size={20} color="red" />
                    </View>
                    
                    <View>
                        <Text style={styles.title}>{name}</Text>
                        <View style={styles.newContainer}>
                            <View style={styles.newSnap}/>
                                <Text style={{fontSize: 12, fontFamily: "Ubuntu_400Regular", color: "#CFD2CF"}}>New Snap . {timeAgo} ago</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.replayIcon}>
                        <Ionicons name="camera-outline" size={30} color="red"></Ionicons>
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
    contentContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    user: {
        flexDirection: "row",
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontFamily: "Ubuntu_700Bold",
        paddingBottom: 5
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
        width: 18,
        height: 18,
        borderRadius: 5,
        backgroundColor: 'red',
        marginRight: 10,
        marginVertical: 5
    },
    replayIcon: {
        padding: 15,
        borderLeftWidth: 2,
        borderLeftColor: "#ccc"
    }
})