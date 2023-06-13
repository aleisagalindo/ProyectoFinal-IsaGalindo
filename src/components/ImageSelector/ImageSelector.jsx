import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Text, View, Button, Image, Alert, Pressable } from "react-native";
import React, {useState} from "react";

const ImageSelector = props => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission are unficients",
        "Necesitamos dar permisos de la camara para usar la aplicacion",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const handlerTakeImage = async () => {
    const hasPermission = await verifyPermissions();
    if(!hasPermission) return

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8
    });
    setPickedUri(image.assets[0].uri)
    props.onImage(image.assets[0].uri)
  };

  return (
    <View style={styles.container}>
      <View className=" border-gray-500 ml-5 mt-8 rounded-md" style={styles.preview}>
        {!pickedUri ? (
          <Text style={styles.previewText} className="text-white">None image selected</Text>
        ) : (
          <Image className="rounded-md" style={styles.image} source={{ uri: pickedUri }} />
        )}
      </View>
      <Pressable className="bg-white mt-[85] p-4 ml-5 mr-5 rounded-xl active:bg-gray-300" onPress={handlerTakeImage}>
        <Text className="text-center" style={styles.buttonTitle}>Take Photo</Text>
     </Pressable>
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  buttonTitle: {
    fontFamily: "PoppinsSemiBold",
  },
  preview: {
    width: "90%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  previewText: {
    fontFamily: "PoppinsRegular",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});