import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';

import workoutJSON from '../../presetWorkouts.json';
import Workout from '../../components/Workout';

import { Container, HeaderText, NextButton, WorkoutList, Texto
} from './styles';

const Screen = (props) => {

  useEffect(()=>{
    props.navigation.setParams({myWorkouts:props.myWorkouts});
  }, [props.myWorkouts]);

  const addWorkout = (item) => {
    if (props.myWorkouts.findIndex(i=>i.id==item.id) < 0) {
      props.addWorkout(item);
    } else {
      props.delWorkout(item);
    }
  };

  return (
    <Container>
      <HeaderText>Opções de treino pré-criados com base no seu nível.</HeaderText>
      <HeaderText>Você selecionou {props.myWorkouts.length} treinos </HeaderText>
 
      <WorkoutList 
        data={workoutJSON}
        renderItem={({item})=><Workout 
          data={item}
          addAction={()=>addWorkout(item)}
        />}
        keyExtractor={item=>item.id}
      />
    </Container>
  );
}

Screen.navigationOptions = ({navigation}) => {
  let btnNext = 'Ignorar';
  if (navigation.state.params && navigation.state.params.myWorkouts.length > 0) {
    btnNext = 'Concluir'
  };

  const nextAction = () => {
   navigation.dispatch(StackActions.reset({
     index: 0,
     actions: [
       NavigationActions.navigate({routeName: 'AppTab'})
     ],
   }));
  };

  return {
    title: '',
    headerRight: <NextButton title={btnNext} onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10
    },
  }
};

const mapStateToProps = (state) => {
  return {
    myWorkouts: state.userReducer.myWorkouts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addWorkout: (workout)=> dispatch({ type: 'ADD_WORKOUT', payload:{workout} }),
    delWorkout: (workout)=> dispatch({ type: 'DEL_WORKOUT', payload:{workout} }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
