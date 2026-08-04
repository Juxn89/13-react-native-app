import { Stack, useLocalSearchParams } from "expo-router"
import { useEffect } from "react"
import { ScrollView, Text } from "react-native"

export const details = () => {
  const params = useLocalSearchParams()

  useEffect(()=> {

  }, [])

  const fettchPokemonByName = (name: string) => {
    try {

    }
    catch(error){

    }
  }

  return (
    <Stack.Screen
      options={{
        title: params.name as string
      }}
    >
      <ScrollView
        contentContainerStyle={{
          gap: 16,
          padding: 16
        }}
      >
        <Text>{ params.name }</Text>
      </ScrollView>
    </Stack.Screen>
  )
}

export default details