import { createStackNavigator } from 'react-navigation-stack';

import MyWorkouts from '../screens/myWorkouts/MyWorkouts';
import EditWorkout from '../screens/editWorkout/EditWorkout';

export default createStackNavigator({
  MyWorkouts,
  EditWorkout,
});