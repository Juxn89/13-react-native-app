import { View, StyleSheet } from "react-native"
import { Colors, Coordinate } from "@/app/types"

interface SnakeProps {
  snake: Coordinate[]
}

export const Snake = ({ snake }: SnakeProps) => {
  return (
    <>
      {
        snake.map((segmente, index: number) => {
          const segmentStyle = {
            left: segmente.x * 10,
            top: segmente.y * 10
          }

          return (
            <View key={index} style={[style.snake, segmentStyle]}/>
          )
        })
      }
    </>
  )
}

export default Snake

const style = StyleSheet.create({
  snake: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: Colors.primary,
    position: 'absolute'
  }
})