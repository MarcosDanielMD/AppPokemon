import {createStackNavigator} from '@react-navigation/stack';
import Poke from './Poke';
import Habilidades from './Habilidades';

const Stack = createStackNavigator();

export default function PokeStack(){
  return(
    <Stack.Navigator>
            <Stack.Screen name="Poke" component={Poke}/>
            <Stack.Screen name="Habilidades" component={Habilidades} options={{title:"Habilidades"}}/>
        </Stack.Navigator>
    );
}