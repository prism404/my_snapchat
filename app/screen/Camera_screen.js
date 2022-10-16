import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from "react-native";
import Constants from "expo-constants";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import AppIcon from "../components/appIcon/AppIcon";

const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  // const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [typeCamera, setTypeCamera] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (!cameraRef) {
      return
    }

    try {
      const pic = await cameraRef.current.takePictureAsync();
      setImagePreview(pic.uri);
      setIsOpen(true);
    } catch (error) {
        console.log("Error taking pictures")
    }
  };

  const closeImagePreview = () => {
    setImagePreview(null)
    setIsOpen(false)
  }

//   const savePicture = async () => {
//     if (Image) {
//       try {
//         const asset = await MediaLibrary.createAssetAsync(image);
//         alert("Picture saved! 🎉");
//         setImage(null);
//         console.log("saved successfully");
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (imagePreview) {
    return (
      <Modal animationType="fade" visible={isOpen}>
        <Image
            source={{ uri: imagePreview }}
            style={{ height: "100%", width: "100%" }}
          />
        <View style={styles.actionBottom}>
          <AppIcon IonName="paper-plane-outline" size={25} color="#eee"></AppIcon>
          <AppIcon IonName="paper-plane-outline" size={25} color='#0e153a' style={styles.sendBtn} ></AppIcon>
        </View>
        <View style={styles.closeBtn}>
            <AppIcon IonName="close-circle-outline" size={25} color='#eee' onPress={closeImagePreview} />
        </View>
      </Modal>
    );
  }

  const changeCameraType = () => {
    if (typeCamera == "front") {
      setTypeCamera("back");
    } else if (typeCamera == "back") {
      setTypeCamera("front");
    } else {
      setTypeCamera("front");
    }
  };

  return (
    <View style={{ flex: 1 }}>
        <Camera
          style={{ height: "100%", width: "100%" }}
          type={typeCamera}
          flashMode={flash}
          ref={cameraRef}
        >
          <TouchableOpacity
            style={styles.captureBtn}
            onPress={takePicture}
          ></TouchableOpacity>
          <View style={styles.header}>
            <AppIcon
              style={styles.headerIcons}
              AntName="user"
              color="#EB1D36"
              size={22}
            />
            <AppIcon
              style={styles.headerIcons}
              IonName="camera-reverse-outline"
              color="#EB1D36"
              size={22}
              onPress={changeCameraType}
            />
          </View>

          <View style={styles.sideItem}>
            <AppIcon
              style={styles.sideIcons}
              IonName="camera-outline"
              size={20}
              color="#EB1D36"
            />
            <AppIcon
              style={styles.sideIcons}
              IonName="flash-outline"
              size={20}
              color={
                flash === Camera.Constants.FlashMode.off ? "#EB1D36" : "#f1f1f1"
              }
              onPress={() =>
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                )
              }
            />
          </View>
        </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
  btn: {
    padding: 20,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
  },
  captureBtn: {
    position: "absolute",
    bottom: 20,
    width: 90,
    height: 90,
    borderRadius: 100,
    borderBottomColor: "#EB1D36",
    borderWidth: 6,
    alignSelf: "center",
  },
  header: {
    position: "absolute",
    top: 40,
    justifyContent: "space-between",
    padding: 15,
    flexDirection: "row",
    width: "100%",
  },
  headerIcons: {
    width: 55,
    height: 55,
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
    marginVertical: 8,
  },
  actionBottom: {
    position: "absolute",
    bottom: 20,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  sendBtn: {
    backgroundColor: "#D2001A",
  },
  closeBtn: {
    padding: 15,
    position: "absolute",
    top: 15,
    right: 5
  }
});

export default CameraScreen;
