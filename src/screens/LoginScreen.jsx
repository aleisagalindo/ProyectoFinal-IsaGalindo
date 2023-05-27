import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";

const LoginScreen = ({ navigation }) => { 
  return (
    <View className="flex h-full pt-[45]">
      <View style={styles.container}>
        <Pressable className="items-end mt-4 mr-4" onPress={() => 
            navigation.navigate("Select Commission Screen")
        }>
          <Text style={styles.fontFamily} className="text-white">
            SKIP
          </Text>
        </Pressable>
        <Text
          style={styles.principalText}
          className="flex justify-start text-5xl mt-[120] ml-5"
        >
          Hello!
        </Text>
        <View className="mt-[40] ml-5">
          <TextInput
            placeholder=" Username"
            style={styles.fontFamily}
            className="pl-4 h-[50] w-[375] bg-gray-300 rounded-xl"
          />
          <TextInput
            placeholder=" Password"
            style={styles.fontFamily}
            className="mt-5 pl-4 h-[50] w-[375] bg-gray-300 rounded-xl"
          />
        </View>
        <View className="mt-[40]">
          <Pressable className="items-end mr-5">
            <Text style={styles.fontFamily} className="text-gray-400">
              Forgot Password?
            </Text>
          </Pressable>
          <Pressable className="mt-6 ml-5 mr-5 p-4 rounded-xl bg-white active:bg-gray-300">
            <Text style={styles.fontFamily} className="text-center">
              Login
            </Text>
          </Pressable>
          <Pressable className="mt-4 ml-5 mr-5 p-4 rounded-xl bg-pink-400 active:bg-pink-500">
            <Text style={styles.fontFamily} className="text-center text-white">
              Register
            </Text>
          </Pressable>
          <Pressable className="text-center active:text-white">
            <Text
              style={styles.fontFamily}
              className="text-gray-400 text-center mt-10 "
            >
              Sign Up with Google
            </Text>
          </Pressable>

          <Text
            style={styles.fontFamily}
            className="text-gray-400 text-center mt-4"
          >
            Sign Up with Facebook
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  principalText: {
    fontFamily: "PoppinsMedium",
    color: "white",
  },
  fontFamily: {
    fontFamily: "PoppinsSemiBold",
  },
});

export default LoginScreen;
