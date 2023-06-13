import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const HomeworkItem = ({title, image, address, onSelect}) => {
    
const commissionGroup = useSelector(state => state.commissions.selected)
  return (
     <Pressable className="flex rounded-xl border h-[110] p-[18] mb-5 ml-5 mr-5" style={{backgroundColor: commissionGroup.color}} onPress={onSelect}>
        <Image style={styles.image} source={{ uri: image }}/>
        <View style={styles.info}>
            <Text style={styles.title} className="text-black top-[-60] ml-[80] absolute text-lg">{title}</Text>
            <Text className="text-black ml-[80] absolute top-[-30] text-md" style={styles.address}>{address}</Text>
        </View>
        <View className="absolute top-[40] left-[320]">
        <FontAwesome name="check" size={20} color="black" />
        </View>
     </Pressable>
  )
}

export default HomeworkItem

const styles = StyleSheet.create({
    title: {
        fontFamily: "PoppinsSemiBold",
      },
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    info: {
        marginLeft: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    address: {
        fontFamily: "PoppinsRegular",
    }
})