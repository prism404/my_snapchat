import React, { useEffect } from 'react'
import axios from 'axios';
import { useContext, useState } from 'react'
import Spinner from 'react-native-loading-spinner-overlay';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [isLoading, setIsLoading] = useState(false);


    const connexion = async () => {
        const login = {
            url: 'http://snapi.epitech.eu:8000/connection',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                email: email,
                password: password,
            }
        }
        return axios(login)
            .then(res => {
                AsyncStorage.setItem('token', JSON.stringify(res.data)).then(() => {
                    navigation.navigate('BottomTabBar', {email: email});
                });
                console.log(res.data)
            })
            .catch(err => {
                if (err.res) {
                    console.log(err.res)
                }
            });
    }

    const isLoggedIn = async () => {
        try {
            await AsyncStorage.getItem('token');
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        isLoggedIn;
    }, []);

    return (
        <View className=" flex-1 items-center justify-center bg-[#A7D2CB]">
            <Spinner visible={isLoading} />

            <View className="h-[40%] items-center justify-center rounded">
                <Text className="font-bold text-[25px]">Welcom To SnapDemon</Text>
            </View>
            <View className="bg-white w-[100%] h-[60%] items-center justify-center rounded-t-[25px]">
                <View className="items-center justify-center rounded mb-[50]">
                    <Text className="font-bold text-[16px]">Login if you already have an acount</Text>
                </View>
                <TextInput placeholder='Email' variant='outlined' onChangeText={(email) => setEmail(email)} className="w-[70%] border-2 m-1 p-[5] rounded" />
                <TextInput placeholder='Password' variant='outlined' onChangeText={(password) => setPassword(password)} className="w-[70%] border-2 m-1 mb-5 p-[5] rounded" secureTextEntry />

                <View className="w-[70%] flex-column bg-[#A97155] p-[5] rounded items-center justify-center">
                    <View className="m-2">

                        <Button onPress={connexion} title="Login" color="#C98474" />

                        <View className="flex-row mt-[10] text-[25px]">
                            <Text className="text-[15px]" >Pas encore inscris ? </Text>
                            <TouchableOpacity onPress={() => navigation.push('Register')}>
                                <Text className="font-bold text-[15px]" >Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen