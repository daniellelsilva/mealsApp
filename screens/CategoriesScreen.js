import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen({ navigation }) {

  
  const renderCategoryItem = (itemData) => {
    const onPressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      })
    }

    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler} />
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  
});
