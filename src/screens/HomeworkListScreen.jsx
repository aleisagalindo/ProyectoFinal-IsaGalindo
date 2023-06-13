import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import HomeworkItem from "../components/HomeworkItem/HomeworkItem";

const HomeworkListScreen = () => {
  const homeworks = useSelector((state) => state.homeworks.homeworks);
  const renderItem = ({ item }) => (
    <HomeworkItem
      title={item.title}
      image={item.image}
      address={"Now"}
    />
  );
  return (
    <View className="pt-[45]">
       <View className="bg-black h-full">
      <Text style={styles.title} className="mt-10 ml-5 mr-5 text-white text-3xl">Here's your delivered homeworks</Text>
      <FlatList
        className="pt-[25]"
        data={homeworks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: "PoppinsMedium",
  }
});

export default HomeworkListScreen;
