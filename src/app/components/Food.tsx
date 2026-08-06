import { StyleSheet, Text } from "react-native"
import { Coordinate } from "@/app/types"

const getRandomFruitEmoji = () => {
  const fruitEmojis = ['🍎', '🍊', '🥭', '🍇', '🍉', '🍓', '🍑', '🍍']
  const randoIndex = Math.floor(Math.random() * fruitEmojis.length)
  return fruitEmojis[randoIndex]
}

export const Food = ({x, y}: Coordinate) => {
  return <Text style={[{ top: y * 10, left: x * 10 }, styles.food]}> { getRandomFruitEmoji() } </Text>
}

const styles = StyleSheet.create({
  food: {
    width: 20,
    height: 20,
    borderRadius: 7,
    position: 'absolute'
  }
})