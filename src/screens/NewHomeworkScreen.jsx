import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Button, Pressable } from 'react-native'
import { addHomework } from '../store/actions/homeworks.actions'
import { useDispatch, useSelector } from 'react-redux'
import ImageSelector from '../components/ImageSelector/ImageSelector'

const NewHomeworkScreen = ({ navigation }) => {
    
    const commissionGroup = useSelector(state => state.commissions.selected)

    const dispatch = useDispatch()
    const [title, setTitle] = useState("");
    const [image, setImage] = useState();

    const handleTitleChange = (text) => setTitle(text);

    const handleSave = () => {
        dispatch(addHomework(title, image));
        navigation.navigate("Homework List")
    };

    return (
       <ScrollView className="pt-[45] bg-black h-full">
        <View>
            <Text style={styles.title} className="mt-5 ml-5 mr-5 text-white text-3xl">Enter your homework name</Text>
            <TextInput className="mt-5 ml-5 pl-4 h-[50] w-[375] bg-gray-300 rounded-xl" style={styles.input} value={title} onChangeText={handleTitleChange} placeholder="Title"/>
            <ImageSelector onImage={setImage}/>
            <Pressable style={{backgroundColor: commissionGroup.color}} className="mt-2 p-4 ml-5 mr-5 rounded-xl active:bg-gray-300" onPress={handleSave}>
            <Text style={styles.buttonTitle} className="text-center" >Send Homework</Text>
            </Pressable>
        </View>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    buttonTitle: {
        fontFamily: "PoppinsSemiBold",
      },
    title: {
        fontFamily: "PoppinsMedium",
      },

    label: {
        fontSize: 18,
        marginBottom: 16
    },
    input: {
        fontFamily: "PoppinsMedium",
    }
})

export default NewHomeworkScreen