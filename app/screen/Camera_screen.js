import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import AppIcon from '../components/appIcon/AppIcon';


const CameraScreen = () => {
  // let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  // const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
  // const [photo, setPhoto] = useState();
  // const [type, setType] = useState(Camera.Constants.Type.back);
  
  const allowPermission = async () => {
    try {
        const camera = await Permissions.askAsync(Permissions.CAMERA)
        if (!camera.granted) {
            return Permissions.askAsync(Permissions.CAMERA)
        }

        setHasCameraPermission(true)

    } catch {

        console.log('error loading the camera')
    }
  }

   if (hasCameraPermission === "undefined") {
    return <Text>Requesting permissions ...</Text>;
  } else if (!hasCameraPermission) {
    return (
        <View style={styles.notAllowed}>
                 <TouchableOpacity 
                style={styles.btn}
                onPress={allowPermission}
                >
                    <Text style={styles.btnText}>Allow camera permission</Text>
                </TouchableOpacity>
              </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }}>
            <TouchableOpacity style={styles.captureBtn}></TouchableOpacity>
                <View style={styles.header}>
                    <AppIcon style={styles.headerIcons} AntName='user' color='#EB1D36' size={22} />
                    <AppIcon style={styles.headerIcons} IonName="camera-reverse-outline" color="#EB1D36" size={22} />
                </View>

                <View style={styles.sideItem}>
                    <AppIcon style={styles.sideIcons} IonName="camera-outline" size={20} color="#EB1D36" />
                    <AppIcon style={styles.sideIcons} IonName="flash-outline" size={20} color="#EB1D36" />
                    {/* <AppIcon IonName="camera-outline" size={20} color="#EB1D36" /> */}
                </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
    notAllowed: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        padding: 20,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    btnText: {
        color: '#eee',
        fontSize: 18,
        fontWeight: 'bold'
    },
    captureBtn: {
        position: 'absolute',
        bottom: 20,
        width: 90,
        height: 90,
        borderRadius: 100,
        borderBottomColor: '#EB1D36',
        borderWidth: 6,
        alignSelf: 'center'
    },
    header: {
        position: 'absolute',
        top: 40,
        justifyContent: 'space-between',
        padding: 15,
        flexDirection: "row",
        width: "100%"
    },
    headerIcons: {
        width: 55,
        height: 55
    },
    sideItem: {
        position: "absolute",
        top: 110,
        right: 0,
        padding: 15,
    },
    sideIcons: {
        width: 50,
        height: 50,
        marginVertical: 8
    }

})

export default CameraScreen;
