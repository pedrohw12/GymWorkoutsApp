import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import ExerciseItem from '../../components/ExerciseItem';

import { 
  Container,
  SafeArea,
  WorkoutHeader,
  WorkoutTitle,
  WorkoutClose,
  WorkoutCloseText,
  WorkoutList,
} from './styles';

const Screen = (props) => {
  let Workout = props.navigation.state.params.Workout;

  const [ exercises, setExercises ] = useState([ ...Workout.exercises ]);

  const checkAction = (item, index) => {
    let newExercises = [ ...exercises ];
    if (!item.done) {
      newExercises[index].done = true;
    } else {
      newExercises[index].done = false;
    }

    setExercises(newExercises);

    checkWorkout();
  };

  const checkWorkout = () => {
    if (exercises.every(i=>i.done)) {
      alert('Treino finalizado.');

      let today = new Date();
      let thisYear = today.getFullYear();
      let thisMonth = today.getMonth() + 1;
      let thisDay = today.getDate();
      thisMonth = (thisMonth<10)?'0'+thisMonth:thisMonth;
      thisDay = (thisDay<10)?'0'+thisDay:thisDay;
      let dFormated = `${thisYear}-${thisMonth}-${thisDay}`;

      props.addProgress(dFormated);
      props.setLastWorkout(Workout.id);

      props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({routeName: 'AppTab'}),
        ],
      }));
    }
  };

  return (
    <Container source={require('../../assets/fitness.jpg')}>
        <StatusBar barStyle="light-content" />
        <SafeArea>
        <WorkoutHeader>
            <WorkoutTitle> {Workout.name} </WorkoutTitle>
            <WorkoutClose onPress={()=> props.navigation.goBack()} underlayColor="transparent">
              <WorkoutCloseText> x </WorkoutCloseText>
            </WorkoutClose>
          </WorkoutHeader>
          <WorkoutList 
            data={exercises}
            renderItem={({item, index})=>
              <ExerciseItem 
                data={item}
                index={index}
                checkAction={()=>checkAction(item, index)}
              />
            }
            keyExtractor={item=>item.id.toString()}
          />
        </SafeArea>
    </Container>
  );
}

Screen.navigationOptions = ({navigation}) => {
  return {
    header: null
  }
};

const mapStateToProps = (state) => {
  return {
    lastWorkout: state.userReducer.lastWorkout,
    myWorkouts: state.userReducer.myWorkouts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProgress: (date)=> dispatch({type: 'ADD_PROGRESS', payload:{date}}),
    setLastWorkout: (id)=> dispatch({type: 'SET_LASTWORKOUT', payload:{id}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
