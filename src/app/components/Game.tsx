import { useEffect, useState } from "react"
import { runOnJS } from "react-native-reanimated"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import { Gesture, GestureDetector } from "react-native-gesture-handler"

import { Colors, Coordinate, Direction } from "@/app/types"
import { randomFoodPosition, checkEatsFood, checkGameOver } from "@/app/utils"
import { Header, Food, Snake } from "@/app/components"

const SNAKE_INITIAL_POSITION = [{ x: 5, y: 5 }]
const FOOD_INITIAL_POSITION = { x: 5, y: 20 }
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 71 }
const MOVE_INTERVAL = 50
const SCORE_INCREMENT = 10

export const Game = () => {
  const [direction, setDirection] = useState<Direction>(Direction.Right)
  const [snake, setSnake] = useState<Coordinate[]>(SNAKE_INITIAL_POSITION)
  const [food, setFood] = useState<Coordinate>(FOOD_INITIAL_POSITION)
  const [isGameOver, setIsGameOver] = useState<boolean>(false)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    if(!isGameOver) {
      const intervalId = setInterval(() => {
        !isPaused && moveSnake()
      }, MOVE_INTERVAL);

      return () => clearInterval(intervalId)
    }
  }, [snake, isGameOver, isPaused, direction])

  const moveSnake = () => {
    const snakeHead = snake[0]
    const newHead = { ...snakeHead }

    if(checkGameOver(snakeHead, GAME_BOUNDS)) {
      setIsGameOver(prev => !prev)
      return
    }

    switch(direction) {
      case Direction.Up:
        newHead.y -= 1
        break
      case Direction.Down:
        newHead.y += 1
        break
      case Direction.Left:
        newHead.x -= 1
        break
      case Direction.Right:
        newHead.x += 1
        break
      default:
        break
    }

    if(checkEatsFood(newHead, food, 2)) {
      setFood( randomFoodPosition(GAME_BOUNDS.xMax, GAME_BOUNDS.yMax) )
      setSnake([newHead, ...snake])
      setScore(score + SCORE_INCREMENT)
    } else {
      setSnake([newHead, ...snake.slice(0, -1)])
    }
  }

  const handlePanGesture = Gesture.Pan()
    .minDistance(15)
    .onUpdate((event) => {
      const { translationX, translationY } = event

      if(Math.abs(translationX) > Math.abs(translationY)) {
        if(translationX > 0) {
          runOnJS(setDirection)(Direction.Right)
        } else {
          runOnJS(setDirection)(Direction.Left)
        }
      } else {
        if(translationY > 0) {
          runOnJS(setDirection)(Direction.Down)
        } else {
          runOnJS(setDirection)(Direction.Up)
        }
      }
    })

  const puaseGame = () => {
    setIsPaused(!isPaused)
  }

  const reloadGame = () => {
    setSnake(SNAKE_INITIAL_POSITION)
    setFood(FOOD_INITIAL_POSITION)
    setIsGameOver(false)
    setScore(0)
    setDirection(Direction.Right)
    setIsPaused(false)
  }

  return (
    <SafeAreaView style={style.container}>
      <Header 
        isPaused={ isPaused } 
        pauseGame={ puaseGame } 
        reloadGame={ reloadGame } 
      >
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: Colors.primary }}>{ score }</Text>
      </Header>
      <GestureDetector gesture={handlePanGesture}>
        <View style={style.boundaries}>
          <Snake snake={snake} />
          <Food x={ food.x } y={ food.y } />
        </View>
      </GestureDetector>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  },
  boundaries: {
    flex: 1,
    borderColor: Colors.primary,
    borderWidth: 12,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Colors.background
  }
})

export default Game
