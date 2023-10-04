import { Button, View, Text, StyleSheet,Image, ScrollView } from 'react-native';

export default function Poke(props) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}> Mais curiosidades</Text>

      <Text style={styles.texto}>
        Todas as propriedades de Pokémon são licenciadas e supervisionadas pela
        The Pokémon Company, são divididas aproximadamente pela geração. Essas
        gerações são divisões cronológicas aproximadamente lançados; quando é
        lançada uma sequela oficial na série principal de RPGs que apresenta
        novos Pokémon, novos personagens e possivelmente novos conceitos de
        jogabilidade, essa sequela é considerada o início de uma nova geração da
        franquia. Os jogos principais e seus derivados, o anime, o mangá e os
        jogos de cartas, são todos atualizados com as novas propriedades de
        Pokémon para cada vez que uma nova geração começa. A franquia começou
        sua oitava geração com Pokémon Sword & Shield, que foram lançados em
        todo o mundo em 15 de novembro de 2019.
      </Text>
      
         <Image style={styles.imagem} source={require('../assets/189632db9fb0a9016bc9018b85dcfef2.gif')} />

         <Text style={styles.texto}> Aqui temos a lista de algumas habilidades geradas de forma aleatória da franquia</Text>
         
      <View style={styles.botaoHabilidades}>
        <Button
          title="Habilidades"
          style={styles.botaoHabilidades}
          onPress={() => props.navigation.navigate('Habilidades')}
        />
        
      </View>
    </ScrollView>
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
  titulo: {
    fontSize: 25,
    color: '#7B68EE',
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold'
  },
  botaoHabilidades: {
    fontSize: 20,
    padding: 20,
    margin: 20,
  },
  texto:{
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
