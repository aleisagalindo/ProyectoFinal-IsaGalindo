import { StyleSheet, View } from 'react-native'
import React from 'react'
import BottomTabNavigator from '../navigation/BottomTabNavigator'


const CommissionGroupScreen = ({route}) => {

  // Este const commission ya no iría aquí
  const commission = route.params.commissionGroup
  return (
    <View style={{flex:1}}>
      <BottomTabNavigator data={commission} />
    </View>

  )
}

export default CommissionGroupScreen

const styles = StyleSheet.create({})