import { StyleSheet, Text, View, FlatList, Image, Pressable } from "react-native";
import React, {useEffect} from "react";
import CommissionGroupItem from "../components/CommissionGroupItem/CommissionGroupItem";
import { useSelector, useDispatch } from "react-redux";
import { filteredCommissionGroup, selectedCommissionGroup } from "../store/actions/commissions.action";

const CommissionSelectedScreen = ({ navigation, route }) => {
  const filteredCommissions = useSelector(state => state.commissions.filteredCommissionGroup);
  const commissionSelected = useSelector(state => state.categories.selected);
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(filteredCommissionGroup(commissionSelected.id))
  }, []);
  

  // const commissionGroups = COMMISSION_DATA.filter(
  //   (commissionGroup) =>
  //     commissionGroup.category === route.params.commissionGroupId
  // );

  const handleSelectedCommissionGroup = (item) => {
    dispatch(selectedCommissionGroup(item.id))
    navigation.navigate("Select Commission Group Screen", {
      name: item.name,
    });
  };

  const renderCommissionGroupItem = ({ item }) => (
    <View>
      <CommissionGroupItem
        item={item}
        onSelected={handleSelectedCommissionGroup}
      />
    </View>
  );
  return (
    <View className="h-full pt-[45]">
      <View className="bg-black h-full">
      <Pressable className="items-start mt-4 ml-4" onPress={() => 
            navigation.navigate("Select Commission Screen")
        }>
          <Text style={styles.fontFamily} className="text-white">
            GO BACK
          </Text>
        </Pressable>
      <Image
        className="rounded-full ml-5 mt-10"
        style={styles.user}
        source={{
          uri: "https://scontent.ftuc4-2.fna.fbcdn.net/v/t39.30808-6/335427565_904149960842138_7611294244057589043_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zkjksfJeWkEAX-3VM9M&_nc_ht=scontent.ftuc4-2.fna&oh=00_AfCufC20Y554XvQsEtUadUwuvdNu9k0mlc-Me5Kr83FCfg&oe=646FFE8B",
        }}
      />
      <Text style={styles.userName} className="mt-2 ml-7 text-white text-xs">
        Ale Galindo
      </Text>
      <View className="mt-10 ml-5 mb-5">
        <Text style={styles.fontFamily} className="text-white text-xl">
          Select your Commission Group
        </Text>
      </View>
      <View>
        <FlatList
          data={filteredCommissions}
          renderItem={renderCommissionGroupItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
      </View>
    </View>
  );
};

export default CommissionSelectedScreen;

const styles = StyleSheet.create({
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
});
