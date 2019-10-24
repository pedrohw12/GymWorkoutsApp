import React, { useState } from 'react';
import { connect } from 'react-redux';

import { 
  Container,
  WorkoutList,
  ButtonArea,
  ButtonImage
} from './styles';

import Workout from '../../components/Workout';

const Screen = (props) => {
  const editWorkout = (workout) => {
    props.navigation.navigate('EditWorkout', {workout});
  };

  return (
    <Container>
      <WorkoutList 
        data={props.myWorkouts}
        renderItem={({item})=>
        <Workout 
            data={item}
            editAction={()=>editWorkout(item)}
            delAction={()=>props.delWorkout(item)}
          />
        }
      />
    </Container>
  );
}

Screen.navigationOptions = ({navigation}) => {
  const AddWorkoutButton = ({onPress}) => {
    return (
      <ButtonArea onPress={onPress} underlayColor="transparent">
        <ButtonImage source={require('../../assets/add.png')} />
      </ButtonArea>
    );
  };

  const btnAction = () => {
    navigation.navigate('EditWorkout');
  };

  return {
    title: 'Meus treinos',
    headerRight: <AddWorkoutButton onPress={btnAction} underlayColor="transparent" />,
    headerRightContainerStyle: {
      marginRight: 10
    },
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
    myWorkouts: state.userReducer.myWorkouts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delWorkout: (workout)=> dispatch({type: 'DEL_WORKOUT', payload:{workout}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
