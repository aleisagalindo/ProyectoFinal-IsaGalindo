import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CommissionsCategoriesItem = ({ item, onSelected }) => {
  return (
    <View className="flex rounded-xl mt-4 mr-5 mb-2" style={[{ backgroundColor:item.color }]}>
      <Pressable className="pl-5 w-full h-[100]" style={styles.container} onPress={() => onSelected(item)}>
        <View className="flex text-start align-bottom">
          <Text style={styles.fontFamily} className="mt-[35] text-black text-lg">{item.title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CommissionsCategoriesItem;

const styles = StyleSheet.create({
    fontFamily: {
        fontFamily: "PoppinsSemiBold",
      },
})