import React, { useLayoutEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import MealDetails from '../components/MealDetails'
import { MEALS } from '../data/dummy-data';
import IconButton from '../components/IconButton';

export default function MealDetailScreen({ route, navigation }) {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const onPressHandler = () => console.log('PRESSED')
  

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => {
  //       return <IconButton icon={"star"} color={"white"} onPress={onPressHandler} />
  //     }
  //   })
  // })

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}/>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}  
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <View>
            <Text style={styles.subtitle}>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (
              <View style={styles.listItem} key={ingredient}>
                <Text style={styles.itemText}>{ingredient}</Text>
              </View>
            ))}
          </View>

          <View>
            <Text style={styles.subtitle}>Steps</Text>
            {selectedMeal.steps.map((step) => (
              <View style={styles.listItem} key={step}>
                <Text style={styles.itemText}>{step}</Text>
              </View>
            ))}
          </View>

        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: "100%",
    height: 350
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center"
  },
  detailText: {
    color: "white"
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    padding: 6,
    textAlign: "center",
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 6,
    marginHorizontal: 12,
    backgroundColor: "#906e59"
  },
  itemText: {
    color: "#351401",
    textAlign: "center"
  },
  listOuterContainer: {
    alignItems: "center"
  },
  listInnerContainer: {
    width: "80%"
  }
})