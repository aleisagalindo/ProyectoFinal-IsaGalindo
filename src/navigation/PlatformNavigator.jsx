import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import SelectCommissionScreen from '../screens/CategoriesCommissionsScreen';
import CommissionSelectedScreen from '../screens/CommissionSelectedScreen';
import CommissionGroupScreen from '../screens/CommissionGroupScreen';

const Stack = createNativeStackNavigator();

const PlatformNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login Screen"
      >
        <Stack.Screen
        name="Home"
        component={LoginScreen}
        options={{
            title: null,
            headerShown: false
        }}
        />
        <Stack.Screen
        name="Select Commission Screen"
        component={SelectCommissionScreen}
        options={{
            title: null,
            headerShown: false,
        }}
        />
        <Stack.Screen
        name="Selected Commission Screen"
        component={CommissionSelectedScreen}
        options={{
          title: null,
          headerShown: false,
          }}
        />
        <Stack.Screen
        name="Select Commission Group Screen"
        component={CommissionGroupScreen}
        options={({route}) => ({
          title: `Commission ${route.params.name}`
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default PlatformNavigator;