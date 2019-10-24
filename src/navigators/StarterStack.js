import { createStackNavigator } from 'react-navigation-stack';

import StarterIntro from '../screens/starterIntro/StarterIntro';
import StarterName from '../screens/starterName/StarterName';
import StarterDias from '../screens/starterDias/StarterDias';
import StarterNivel from '../screens/starterNivel/StarterNivel';
import StarterRecomendations from '../screens/starterRecomendations/StarterRecomendations';

export default createStackNavigator({
  StarterIntro,
  StarterName,
  StarterDias,
  StarterNivel,
  StarterRecomendations
});
