import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Home from './Home';
import Pokemons from './Pokemons';
import PokeStack from './PokeStack'

const Tab = createBottomTabNavigator();

export default function RoutesTab(){
  return(
    <Tab.Navigator inittialRouteName="Home" tabBarOptions={{activeTintColor:"#000"}}>

    <Tab.Screen name="Home" component={Home} options={{tabBarLavbel:"Home", tabBarIcon:
    ({color,size})=> (<MaterialCommunityIcons name = "pokeball" col= {color} size={size} />)}}/>    

    <Tab.Screen name="Pokemons" component={Pokemons} options={{tabBarLavbel:"Pokemon", tabBarIcon:
    ({color,size})=> (<MaterialCommunityIcons name = "magazine-pistol" col= {color} size={size} />)}}/>    

  <Tab.Screen name="Poke" component={PokeStack} options={{tabBarLavbel:"Pokemon", tabBarIcon:
    ({color,size})=> (<MaterialCommunityIcons name = "pokemon-go" col= {color} size={size} />)}}/>    


    </Tab.Navigator>
  );
}