import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React from "react";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";


const App = () => {
  const [loaded] = useFonts({
    PoppinsLight: require("./src/assets/fonts/Poppins-Light.ttf"),
    PoppinsRegular: require("./src/assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("./src/assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("./src/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) return;

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;

