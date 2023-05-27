import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'

const CommissionGroupSelectedScreen = ({ route }) => {

  return (
    <View className="h-full  bg-black">
      <View className="bg-black">
         <Text style={styles.titleText} className="ml-5 mr-5 text-white text-4xl">{route.params.info.greeting} {route.params.info.name}</Text>
      </View>
         <Pressable className="ml-5 mr-5">
          <Text className="text-white">Go to Zoom</Text>
         </Pressable>
      <View>
        
      </View>
    </View>
  )
}

export default CommissionGroupSelectedScreen

const styles = StyleSheet.create({
  fontFamily: {
    fontFamily: "PoppinsSemiBold",
  },
  titleText: {
    fontFamily: "PoppinsMedium",
 } 
})