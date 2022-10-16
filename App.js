import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import CameraScreen from "./app/screen/Camera_screen";

export default function App() {
 

  // function toggleCameraType() {
  //   setType((current) =>
  //     current === Camera.Constants.Type.back
  //       ? Camera.Constants.Type.front
  //       : Camera.Constants.Type.back
  //   );
  // }

  // useEffect(() => {
  //   (async () => {
  //     const cameraStatus = await Camera.requestCameraPermissionsAsync();
  //     const mediaLibraryPermission =
  //       await MediaLibrary.requestPermissionsAsync();
  //     setHasCameraPermission(cameraStatus.status === "granted");
  //     setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
  //   })();
  // }, []);

  // if (hasCameraPermission === "undefined") {
  //   return <Text>Requesting permissions ...</Text>;
  // } else if (!hasCameraPermission) {
  //   return (
  //     <Text>
  //       Permission for camera not granted. Please change this in settings.
  //     </Text>
  //   );
  // }

  // let takePic = async () => {
  //   let options = {
  //     quality: 1,
  //     base64: true,
  //     exif: false,
  //   };

  //   let newPhoto = await cameraRef.current.takePictureAsync(options);
  //   setPhoto(newPhoto);
  // };

  // if (photo) {
  //   let sharePic = () => {
  //     shareAsync(photo.uri).then(() => {
  //       setPhoto(undefined);
  //     });
  //   };

  //   let savePhoto = () => {
  //     MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
  //       setPhoto(undefined);
  //     });
  //   };

  //   return (
  //     <SafeAreaView style={styles.container}>
  //       <Image
  //         style={styles.preview}
  //         source={{ uri: "data:image/jpg;base64," + photo.base64 }}
  //       ></Image>
  //       <Button title="Share" onPress={sharePic}></Button>
  //       {hasMediaLibraryPermission ? (
  //         <Button title="Save" onPress={savePhoto} />
  //       ) : undefined}
  //       <Button title="Discard" onPress={() => setPhoto(undefined)}></Button>
  //     </SafeAreaView>
  //   );
  // }

  return (
    <CameraScreen/>
    // <Camera style={styles.container} ref={cameraRef}>
    //   <View style={styles.buttonContainer}>
    //     <Button
    //       title="Flip Camera"
    //       onPress={() => {
    //         toggleCameraType(
    //           type === Camera.Constants.Type.back
    //             ? Camera.Constants.Type.front
    //             : Camera.Constants.Type.back
    //         );
    //       }}
    //     />
    //     <Button title="Take Pic" onPress={takePic}/>
    //   </View>
    //   <StatusBar style="auto"></StatusBar>
    // </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: "#FAF7F0",
    alignSelf: "flex-end",
    justifyContent: 'center'
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 30, 
    fontWeight: 'bold'
  },
  slideDefault: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  }
});
