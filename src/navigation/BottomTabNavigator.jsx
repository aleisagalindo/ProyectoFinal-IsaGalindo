import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";

import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import CommissionGroupSelectedScreen from "../screens/CommissionGroupSelectedScreen";
import ChatScreen from "../screens/ChatScreen";
import LibraryScreen from "../screens/LibraryScreen";

const BottomTabs = createBottomTabNavigator()

export default BottomTabNavigator = ({ data }) => {
    return (
        <BottomTabs.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
          }}>
            <BottomTabs.Screen initialParams={{ info: data }} name="Home" component={CommissionGroupSelectedScreen} 
            options={{
                tabBarIcon: () => (
                  <View>
                    <MaterialIcons name="home-filled" size={32} color="white" />
                  </View>
                ),
              }}
            />
            <BottomTabs.Screen name="Chat" component={ChatScreen} 
            options={{
                tabBarIcon: () => (
                  <View>
                    <MaterialIcons name="chat" size={28} color="white" />
                  </View>
                ),
              }}
            />
            <BottomTabs.Screen name="My Commission" component={LibraryScreen}
            options={{
                tabBarIcon: () => (
                  <View>
                    <FontAwesome5 name="book" size={25} color="white" />
                  </View>
                ),
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