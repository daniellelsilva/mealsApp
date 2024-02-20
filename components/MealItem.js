import React from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'

export default function MealItem({title, imageUrl}) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} />
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  
})
