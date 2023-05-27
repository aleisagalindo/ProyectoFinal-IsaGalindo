import { Pressable, Text, View, StyleSheet } from 'react-native'
import React from 'react'

const CommissionGroupItem = ({item, onSelected}) => {
  return (

    <Pressable style={[{ backgroundColor:item.color }]} className="flex rounded-xl border h-[150] p-[20] mb-5 ml-5 mr-[-10]" onPress={() => onSelected(item)}>
      <View>
        <Text style={styles.fontFamily} className="text-center text-black text-lg mt-8">Commission {item.name}</Text>
      </View>
    </Pressable>
  )
}

export default CommissionGroupItem;

const styles = StyleSheet.create({
  fontFamily: {
    fontFamily: "PoppinsSemiBold",
  },
})