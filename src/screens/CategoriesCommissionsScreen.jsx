import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import CommissionsCategoriesItem from '../components/CommissionsCategoriesItem/CommissionsCategoriesItem';

import { useDispatch, useSelector } from "react-redux";
import { selectedCategory } from "../store/actions/category.action";

const SelectCommissionScreen = ({ navigation }) => {

  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();
  
  const handleSelectedCommission = item => {
    dispatch(selectedCategory(item.id));
    navigation.navigate("Selected Commission Screen", {
      // commissionGroupId: item.id,
      name: item.title,
    });
  };

  const renderCommissionsCategoryScreen = ({ item }) => (
    <View>
      <CommissionsCategoriesItem
      item={item}
      onSelected={handleSelectedCommission}
      />
    </View>
  )

  return (
    <View  className="flex h-full pt-[45]">
      <View style={styles.container}>
        <Image className="rounded-full ml-5 mt-10" style={styles.user}
        source={{
          uri: "https://scontent.ftuc4-2.fna.fbcdn.net/v/t39.30808-6/335427565_904149960842138_7611294244057589043_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zkjksfJeWkEAX-3VM9M&_nc_ht=scontent.ftuc4-2.fna&oh=00_AfCufC20Y554XvQsEtUadUwuvdNu9k0mlc-Me5Kr83FCfg&oe=646FFE8B"
        }}
        />
        <Text style={styles.userName} className="mt-2 ml-7 text-white text-xs">
          Ale Galindo
        </Text>

        <View className="ml-5 mt-6">
        <Text style={styles.principalText} className="text-xl">
          Select your Commission
        </Text>
        <View>
          <FlatList 
          data={categories}
          renderItem={renderCommissionsCategoryScreen}
          keyExtractor={item => item.id}
          />
        </View>
        </View>
      </View>
    </View>
  )
}

export default SelectCommissionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  user: {
    width: 90,
    height: 90,
  },
  principalText: {
    fontFamily: "PoppinsSemiBold",
    color: "white",
  },
  userName: {
    fontFamily: "PoppinsLight",
  },
  fontFamily: {
    fontFamily: "PoppinsSemiBold",
  },
})