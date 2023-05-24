import { useFonts } from "expo-font";
import React from "react";
import PlatformNavigator from "./src/navigation/PlatformNavigator";


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
     <PlatformNavigator />
  );
};

export default App;

