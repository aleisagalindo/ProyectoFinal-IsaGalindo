import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CommissionNavigator from '../navigation/CommissionNavigator';

const BottomTabs = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
      <BottomTabs.Navigator>
      <BottomTabs.Screen name='Home' component={CommissionGroupScreen}/>
      <BottomTabs.Screen name='Commission Navigator' component={CommissionNavigator}/>
      </BottomTabs.Navigator>
    )
}
BottomTabNavigator()

const CommissionGroupScreen = ({route}) => {
  const commission = route.params.commissionGroup
  return (
    <View>
      <Text>{commission.greeting} Commission {commission.name}</Text>
    </View>

  )
}

export default CommissionGroupScreen

const styles = StyleSheet.create({})