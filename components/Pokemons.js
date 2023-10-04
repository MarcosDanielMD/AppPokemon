import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';

export default function Pokemons(props) {
  const [pokeData, setPokeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchPokemonData = async () => {

        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        setPokeData(data.results);
        setIsLoading(false);
  
    };

    fetchPokemonData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Lista de Pokémon</Text>
      </View>

      {isLoading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={pokeData}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Text style={styles.texto}>
              <Text>Nome do Pokémon: {item.name}{'\n'}</Text>
               <Text>Url do Pokémon: {item.url}{'\n'}</Text>
            </Text>
            
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#1C1C1C',
    alignContent: 'center',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  texto:{
    fontSize: 18,
    margin:20,
    backgroundColor: '#7B68EE',
    borderRadius: 20,
    padding: 20,
    color: 'white',
    fontWeight: 'bold'
  },
    titulo:{
    fontSize: 25,
    color: '#7B68EE',
    textAlign: 'center',
    margin: 20,
    fontWeight:'bold'
  },
});

