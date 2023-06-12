import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectCommissionScreen from "../screens/CategoriesCommissionsScreen";
import CommissionSelectedScreen from "../screens/CommissionSelectedScreen";
import CommissionGroupScreen from "../screens/CommissionGroupScreen";



const Stack = createNativeStackNavigator();

export default function PlatformNavigator() {
  return (
      <Stack.Navigator initialRouteName="Select Commission Screen">
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
          options={({ route }) => ({
            title: `Commission ${route.params.name}`,
            headerShown: false,
          })}
        />
      </Stack.Navigator>
  );
}
