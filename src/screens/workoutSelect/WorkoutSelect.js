import React from 'react';
import { connect } from 'react-redux';
import { HeaderBackButton } from 'react-navigation-stack';
import { StackActions, NavigationActions } from 'react-navigation';

import { 
  Container,
  WorkoutList,
  Title,
} from './styles';

import Workout from '../../components/Workout';

const Screen = (props) => {
  let lastWorkout = false;
  if (props.lastWorkout) {
    lastWorkout = props.myWorkouts.find(i=>i.id == props.lastWorkout);
  }

  const goWorkout = (Workout) => {
    props.navigation.navigate('WorkoutCheckList', {Workout});
  };

  return (
    <Container>
      {lastWorkout && 
        <>
          <Title> Seu último treino foi: </Title>
          <Workout data={lastWorkout} />
        </>
      }

      <Title> Escolha seu treino de hoje: </Title>

      <WorkoutList 
        data={props.myWorkouts}
        renderItem={({item})=>
        <Workout 
            data={item}
            goAction={()=>goWorkout(item)}
          />
        }
      />
    </Container>
  );
}

Screen.navigationOptions = ({navigation}) => {
  const handleBackAction = () => {
    navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'AppTab'})
      ]
    }));
  }; 

  return {
    title: 'Escolha seu treino',
    headerLeft: <HeaderBackButton onPress={handleBackAction} />
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
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
