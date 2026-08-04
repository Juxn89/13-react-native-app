import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

interface IPokemon {
  name: string,
  image: string
  imageBack: string,
  types: PokemonType[]
}

interface PokemonType {
  type: {
    name: string,
    url: string
  }
}

const colorByType: Record<string, string> = {
  normal: '#A8A77A',
  fighting: '#C22E28',
  flying: '#A98FF3',
  poison: '#A33EA1',
  ground: '#E2BF65',
  rock: '#B6A136',
  bug: '#A6B91A',
  ghost: '#735797',
  steel: '#B7B7CE',
  fire: '#EE5155',
  water: '#6390F0',
  grass: '#7AC74C',
  electric: '#F7D02C',
  psychic: '#F95587',
  ice: '#96D9D6',
  dragon: '#6F35FC',
  dark: '#705746',
  fairy: '#D685AD'
}

export default function Index() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])

  useEffect(() => {
    fetchPokemons()
  }, [])
  
  const fetchPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      const jsonResnpose = await response.json()

      const detailedPokemons = await Promise.all(
        jsonResnpose.results.map(async (currentPokemon: any) => {
          const detailedResponse = await fetch(currentPokemon.url)
          const detailedData = await detailedResponse.json()

          return {
            name: currentPokemon.name,
            image: detailedData.sprites.front_default,
            imageBack: detailedData.sprites.back_default,
            types: detailedData.types
          }
        })
      )

      setPokemons(detailedPokemons)
    }
    catch(error) {
      console.error('Error fetching pokemons:', error);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 16,
        padding: 16
      }}
    >
      {
        pokemons.map(pokemon => (
          <Link 
            key={pokemon.name} 
            href={{
              pathname: '/details',
              params: { name: pokemon.name }
            }}              
            style={{ 
                backgroundColor: colorByType[pokemon.types[0].type.name] + 50,
                padding: 20,
                borderRadius: 20
              }}
          >
            <View>
              <Text style={ styles.name }>{ pokemon.name }</Text>
              <Text style={ styles.type }>{ pokemon.types[0].type.name }</Text>
              <View
                style={{
                  flexDirection: 'row'
                }}
              >
                <Image 
                  source={{ uri: pokemon.image }}
                  width={ 150 }
                  height={ 150 }
                />
                <Image 
                  source={{ uri: pokemon.imageBack }}
                  width={ 150 }
                  height={ 150 }
                />              
              </View>
            </View>            
          </Link>
        ))
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  type: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center'
  }
});
