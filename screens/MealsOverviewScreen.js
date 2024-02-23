import React, { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0
  })

  const renderMealItem = (itemData) => {
    const {item} = itemData
    
    const mealItemsProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    }
    return (
      <MealItem {...mealItemsProps} />
    )
  }

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId)

    navigation.setOptions({ title: categoryTitle })

  }, [categoryId, navigation])

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})
