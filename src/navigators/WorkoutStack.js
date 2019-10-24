import { createStackNavigator } from 'react-navigation-stack';

import WorkoutSelect from '../screens/workoutSelect/WorkoutSelect';
import WorkoutCheckList from '../screens/workoutCheckList/WorkoutCheckList';

export default createStackNavigator({
  WorkoutSelect,
  WorkoutCheckList,
});