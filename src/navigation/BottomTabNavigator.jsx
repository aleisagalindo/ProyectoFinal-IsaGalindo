import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons"
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import CommissionGroupSelectedScreen from "../screens/CommissionGroupSelectedScreen";
import LibraryScreen from "../screens/LibraryScreen";
import NewHomeworkScreen from "../screens/NewHomeworkScreen";
import HomeworkListScreen from "../screens/HomeworkListScreen";

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
            <BottomTabs.Screen name="My Commission" component={LibraryScreen}
            options={{
                tabBarIcon: () => (
                  <View>
                    <FontAwesome5 name="book" size={25} color="white" />
                  </View>
                ),
              }}
            />
            <BottomTabs.Screen name="Homework List" component={HomeworkListScreen}
            options={({navigation}) => ({
              title: "Homework List",
              tabBarIcon: () => (
                <View>
                  <MaterialIcons name="list" size={28} color="white" />
                </View>
              ),
              headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('New Homework')}>
                      <Ionicons name="md-add" color="white" size={23}/>
                  </TouchableOpacity>
              )
          })} 
            />
            <BottomTabs.Screen 
            name="New Homework" 
            component={NewHomeworkScreen}
            options={{
                tabBarIcon: () => (
                  <View>
                    <MaterialIcons name="send" size={28} color="white" />
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