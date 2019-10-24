import React from 'react';
import { connect } from 'react-redux';

import { Container, HeaderText, NextButton, BoldText, Texto, DaysArea, DefaultButton
} from './styles';
//import userReducer from '../../reducers/userReducer';

const Screen = (props) => {

  const toggleDay = (dia) => {
    let newWorkoutDays = [...props.workoutDays];
    if (!props.workoutDays.includes(dia)) {
      // inserir
      newWorkoutDays.push(dia);
    } else {
      // remover
      newWorkoutDays = newWorkoutDays.filter(i=>i!=dia);
    }
    props.setWorkoutDays(newWorkoutDays);
    props.navigation.setParams({ workoutDays:newWorkoutDays });
  };

  let firstName = props.name.split(' ')[0];

  return (
    <Container>
      <HeaderText> Opa, <BoldText>{firstName}</BoldText> ! Tudo bem ? </HeaderText>
      <HeaderText> Quais <BoldText>dias da semana</BoldText> você pretende treinar ? </HeaderText>

      <DaysArea>
        <DefaultButton bgcolor={props.workoutDays.includes(1)?'#A5E8BC':false} onPress={()=>toggleDay(1)} width={100} underlayColor={"#CCC"}>
          <Texto>Segunda</Texto>
        </DefaultButton>
        <DefaultButton bgcolor={props.workoutDays.includes(2)?'#A5E8BC':false} onPress={()=>toggleDay(2)} width={100} underlayColor={"#CCC"}>
          <Texto>Terça</Texto>
        </DefaultButton>
        <DefaultButton bgcolor={props.workoutDays.includes(3)?'#A5E8BC':false} onPress={()=>toggleDay(3)} width={100} underlayColor={"#CCC"}>
          <Texto>Quarta</Texto>
        </DefaultButton>
        <DefaultButton bgcolor={props.workoutDays.includes(4)?'#A5E8BC':false} onPress={()=>toggleDay(4)} width={100} underlayColor={"#CCC"}>
          <Texto>Quinta</Texto>
        </DefaultButton>
        <DefaultButton bgcolor={props.workoutDays.includes(5)?'#A5E8BC':false} onPress={()=>toggleDay(5)} width={100} underlayColor={"#CCC"}>
          <Texto>Sexta</Texto>
        </DefaultButton>
        <DefaultButton bgcolor={props.workoutDays.includes(6)?'#A5E8BC':false} onPress={()=>toggleDay(6)} width={100} underlayColor={"#CCC"}>
          <Texto>Sábado</Texto>
        </DefaultButton>
        <DefaultButton bgcolor={props.workoutDays.includes(0)?'#A5E8BC':false} onPress={()=>toggleDay(0)} width={100} underlayColor={"#CCC"}>
          <Texto>Domingo</Texto>
        </DefaultButton>
      </DaysArea>
      
    </Container>
  );
}

Screen.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.workoutDays.length) {
      alert('Você precisa treinar pelo menos 1 dia!');
      return
    }
    navigation.navigate('StarterNivel');
  };

  return {
    title: '',
    headerRight: <NextButton title="Próximo" onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10
    },
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
    workoutDays: state.userReducer.workoutDays,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName:(name) => dispatch({ type: 'SET_NAME', payload:{name} }),
    setWorkoutDays:(workoutDays) => dispatch({ type: 'SET_WORKOUTDAYS', payload:{workoutDays} }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
