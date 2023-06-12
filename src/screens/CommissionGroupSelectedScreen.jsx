import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


const CommissionGroupSelectedScreen = () => {

const commissionGroup = useSelector(state => state.commissions.selected)
  
  return (
    <View className="h-full pt-[45]">
      <View className="bg-black h-full">
        <View>
        <Image className="rounded-full ml-5 mt-10" style={styles.user}
        source={{
          uri: "https://scontent.ftuc4-2.fna.fbcdn.net/v/t39.30808-6/335427565_904149960842138_7611294244057589043_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zkjksfJeWkEAX-3VM9M&_nc_ht=scontent.ftuc4-2.fna&oh=00_AfCufC20Y554XvQsEtUadUwuvdNu9k0mlc-Me5Kr83FCfg&oe=646FFE8B"
        }}
        />
        <Text style={styles.userName} className="mt-2 ml-7 text-white text-xs">
          Ale Galindo
        </Text>
        </View>
      
      <View className="mt-10">
         <Text style={styles.titleText} className="ml-5 mr-5 text-white text-3xl">{commissionGroup.greeting} {commissionGroup.name}</Text>
      </View>

        <View  className="flex mt-4 ml-5 mr-5">
         <Pressable style={{backgroundColor: commissionGroup.color}} className="items-start p-[70] rounded-xl">
          <Text className="text-lg absolute top-[20] left-[20]" style={styles.fontFamily}>Material of the Class</Text>
          <Text className="mr-5 text-md absolute top-[60] left-[20]" style={styles.paragraphText}>Here you'll find the slides, PDF'S & the Documents of what we did in Class.</Text>
            <Pressable className="border-2 rounded-xl p-2 absolute top-[75] left-[245]">
            <Text style={styles.fontFamily} className="text-start text-black">Go to Folder</Text>
            </Pressable>
         </Pressable>
        </View>

        <View className="flex-row mt-5">
        <Pressable className="ml-5 mr-5 p-[65] rounded-xl bg-gray-900">
          <Text style={styles.fontFamily} className="text-white">Go live</Text>
         </Pressable>
         <Pressable className="mr-5 p-[55] rounded-xl bg-gray-900">
          <Text style={styles.fontFamily} className="text-white">Calendar</Text>
         </Pressable>
        </View>   

      <View>
        
      </View>

      </View>
    </View>
  )
}

export default CommissionGroupSelectedScreen

const styles = StyleSheet.create({
  user: {
    width: 80,
    height: 80,
  },
  userName: {
    fontFamily: "PoppinsLight",
  },
  fontFamily: {
    fontFamily: "PoppinsSemiBold",
  },
  titleText: {
    fontFamily: "PoppinsMedium",
 }, 
 paragraphText: {
  fontFamily: "PoppinsRegular",
 }
})