import React from 'react';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';

import { 
  Container,
  Label,
  Input,
  ListArea,
  DayItem,
  DayItemText,
  LevelItem,
  LevelItemText,
  ResetButton,
} from './styles';

const Screen = (props) => {
  const toggleWorkoutDay = (d) => {
    let newWorkoutDays = [ ...props.workoutDays ];
    if (newWorkoutDays.includes(d)) {
      if (newWorkoutDays.length == 1) {
        alert('Calma aê! Você tem que treinar pelo menos 1 dia.');
        return;
      }
      newWorkoutDays = newWorkoutDays.filter(i=>i!=d);
    } else {
      newWorkoutDays.push(d);
    }

    props.setWorkoutDays(newWorkoutDays);
  };

  const resetAction = () => {
    props.reset();
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'StarterStack'})
      ],
    });
    props.navigation.dispatch(resetAction);
  };

  return (
    <Container>
      <Label> Seu nome completo: </Label>
      <Input value={props.name} onChangeText={(item)=>props.setName(item)} />

      <Label> Dias em que você treina: </Label>
      <ListArea>
        <DayItem onPress={()=>toggleWorkoutDay(1)} style={props.workoutDays.includes(1)?{backgroundColor:'#A5E8BC'}:{}} underlayColor="transparent">
          <DayItemText>S</DayItemText>
        </DayItem>
        <DayItem onPress={()=>toggleWorkoutDay(2)} style={props.workoutDays.includes(2)?{backgroundColor:'#A5E8BC'}:{}} underlayColor="transparent">
          <DayItemText>T</DayItemText>
        </DayItem>
        <DayItem onPress={()=>toggleWorkoutDay(3)} style={props.workoutDays.includes(3)?{backgroundColor:'#A5E8BC'}:{}} underlayColor="transparent">
          <DayItemText>Q</DayItemText>
        </DayItem>
        <DayItem onPress={()=>toggleWorkoutDay(4)} style={props.workoutDays.includes(4)?{backgroundColor:'#A5E8BC'}:{}} underlayColor="transparent">
          <DayItemText>Q</DayItemText>
        </DayItem>
        <DayItem onPress={()=>toggleWorkoutDay(5)} style={props.workoutDays.includes(5)?{backgroundColor:'#A5E8BC'}:{}} underlayColor="transparent">
          <DayItemText>S</DayItemText>
        </DayItem>
        <DayItem onPress={()=>toggleWorkoutDay(6)} style={props.workoutDays.includes(6)?{backgroundColor:'#A5E8BC'}:{}} underlayColor="transparent">
          <DayItemText>S</DayItemText>
        </DayItem>
        <DayItem onPress={()=>toggleWorkoutDay(0)} style={props.workoutDays.includes(0)?{backgroundColor:'#A5E8BC'}:{}} underlayColor="transparent">
          <DayItemText>D</DayItemText>
        </DayItem>
      </ListArea>

      <Label> Seu nível: </Label>
      <ListArea>
        <LevelItem onPress={()=>props.setLevel('beginner')} style={props.level=='beginner'?{backgroundColor:'#A5E8BC'}:{}} underlayColor="transparent">
          <LevelItemText> Iniciante </LevelItemText>
        </LevelItem>
        <LevelItem onPress={()=>props.setLevel('intermediate')} style={props.level=='intermediate'?{backgroundColor:'#A5E8BC'}:{}} underlayColor="transparent">
          <LevelItemText> Intermediário </LevelItemText>
        </LevelItem>
        <LevelItem onPress={()=>props.setLevel('advanced')} style={props.level=='advanced'?{backgroundColor:'#A5E8BC'}:{}} underlayColor="transparent">
          <LevelItemText> Avançado </LevelItemText>
        </LevelItem>
      </ListArea>

      <Label> Você quer resetar tudo ?☻ </Label>
      <ResetButton title="Resetar tudo" onPress={resetAction}/>
    </Container>
  );
}

Screen.navigationOptions = ({navigation}) => {

  return {
    title: 'Configurações',
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
    workoutDays: state.userReducer.workoutDays,
    level: state.userReducer.level,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name)=> dispatch({type:'SET_NAME', payload:{name}}),
    setWorkoutDays: (workoutDays)=> dispatch({type:'SET_WORKOUTDAYS', payload:{workoutDays}}),
    setLevel: (level)=> dispatch({type:'SET_LEVEL', payload:{level}}),
    reset: ()=> dispatch({type: 'RESET'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
