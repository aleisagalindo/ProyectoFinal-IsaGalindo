import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import BottomTabNavigator from '../navigation/BottomTabNavigator'


const CommissionGroupScreen = ({route}) => {

  
  const commission = route.params.commissionGroup
  return (
    <View style={{flex:1}}>
      <BottomTabNavigator data={commission} />
    </View>

  )
}

export default CommissionGroupScreen

const styles = StyleSheet.create({})