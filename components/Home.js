import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.texto}>
        Pokémon (ポケモン Pokemon?) é uma franquia de mídia que pertence a The
        Pokémon Company, tendo sido criada por Satoshi Tajiri em 1995. Ela é
        centrada em criaturas ficcionais chamadas "Pokémon", que os seres
        humanos capturam e os treinam para lutarem entre si com seus ataques de
        diversos tipos.
      </Text>
      
      <Image style={styles.imagem} source={require('../assets/pikachu.gif')} />

      <Text style={styles.texto}>
        O nome Pokémon é uma abreviação da marca japonesa Pocket Monsters
        (ポケットモンスター Poketto Monsutā?). O termo Pokémon, além de se
        referir a própria franquia Pokémon, também se refere às mais de 900
        espécies de ficção que aparecem na mídia de Pokémon. A palavra "Pokémon"
        é usada no singular e plural para o nome individual de cada espécie; a
        gramática correta é "um Pokémon" e "muitos Pokémon", bem como "um
        Pikachu" e "muitos Pikachu". (no entanto, em Pokémon Red, Blue e
        Yellow, alguns NPCs se referiam a Clefairy e Diglett no plural,
        mostrando "CLEFAIRYs" and "DIGLETTs", respectivamente. Isso foi arrumado
        em FireRed e LeafGreen.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#836FFF',
    alignContent: 'center',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 20,
  },
  logo: {
    marginLeft: 35,
    marginTop: 15,
    width: 300,
    height: 100,
  },
  texto: {
    fontSize: 18,
    margin: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  imagem: {
    width: 300,
    height: 200,
    marginLeft: 35,
    borderRadius: 20,
  },
});
