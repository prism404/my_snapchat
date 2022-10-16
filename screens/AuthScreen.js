import React, { useState } from 'react'
import { View, Text, TextInput, Button, Pressable } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';


function AuthScreen( {navigation}) {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <View className="flex-1 items-center justify-center bg-[#A7D2CB]">
            <Spinner visible={isLoading} />
            <View className="h-[50%] items-center justify-center rounded">
                <Text className="font-bold text-[25px]">Welcom To SnapDemon</Text>
            </View>
            <View className="bg-white w-[100%] h-[50%] items-center justify-center rounded-t-[25px]">
                <View className="flex-row bg-[#A97155] mt-[50] p-[65] rounded">
                    <View className="m-2">
                        <Button onPress={() => navigation.push('Login')} title="Login" color="#C98474" />
                    </View>
                    <View className="m-2">
                        <Button onPress={() => navigation.push('Register')} title="Register" color="#C98474" />
                    </View>
                </View>

            </View>
        </View>
    );
}

export default AuthScreen