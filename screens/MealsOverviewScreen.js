import React, { useLayoutEffect } from 'react'

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList';

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0
  })

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId)

    navigation.setOptions({ title: categoryTitle })

  }, [categoryId, navigation])

  return <MealsList items={displayedMeals} />
}
