import CommissionNavigator from "./CommissionNavigator";
import PlatformNavigator from "./PlatformNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"

const BottomTabs = createBottomTabNavigator()

export default BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}>
            <BottomTabs.Screen name="Quit" component={PlatformNavigator} 
            options={{
                tabBarIcon: () => (
                    <View>
                        <Ionicons name="exit" size={25} color="white"/>
                        <Text style={styles.fontFamily} className="text-center text-white">Quit</Text>
                    </View>
                )
            }}
            />
            <BottomTabs.Screen name="My Commission" component={CommissionNavigator}
            options={{
                tabBarIcon: () => (
                    <View>
                        <Ionicons name="home" size={25} color="white"/>
                        <Text style={styles.fontFamily} className="text-center text-white">Home</Text>
                    </View>
                )
            }}
            />
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "#000",
        paddingTop: 15,
        height: 85,
        position: "absolute",
    },
    fontFamily: {
        fontFamily: "PoppinsSemiBold",
      },
})