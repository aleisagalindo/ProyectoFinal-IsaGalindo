import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View className="h-full pt-[45] flex">
      <View className="bg-black h-full">

        <View>
          <Image className=" mr-10 ml-[-30]" source={require("../assets/images/MiniRoom.png")} 
          style={{width: 700, height: 450,}}
          />
        </View>

        <View>
          <Text style={styles.titleText} className="text-white pt-1 ml-5 text-5xl">
            Task,{"\n"}Library,{"\n"}Chat & Learn
          </Text>
        </View>
        <Pressable className="bg-pink-400 mt-[85] p-4 ml-5 mr-5 rounded-xl active:bg-pink-500" onPress={() => navigation.navigate("Login Screen")} >
           <Text style={styles.fontFamily} className="text-white text-center text-lg ">Get Started</Text>
        </Pressable>

      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    fontFamily: {
        fontFamily: "PoppinsSemiBold",
      },
     titleText: {
        fontFamily: "PoppinsMedium",
     } 
});
