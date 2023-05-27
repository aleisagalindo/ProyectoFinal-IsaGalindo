import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CommissionGroupSelectedItem = ({ item }) => {
  return (
    <View>
      <Text>{item.greeting} {item.name}</Text>
    </View>
  )
}

export default CommissionGroupSelectedItem

const styles = StyleSheet.create({})