import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const CommissionGroupScreen = ({navigation, route}) => {

  
  const commission = route.params.commissionGroup
  return (
    <View>
      <Text>{commission.greeting} Commission {commission.name}</Text>
    </View>

  )
}

export default CommissionGroupScreen

const styles = StyleSheet.create({})