import React from 'react';
import { connect } from 'react-redux';

import { Container, HeaderText, NextButton, Texto, LevelArea, DefaultButton,
  BoldText
} from './styles';
//import userReducer from '../../reducers/userReducer';

const Screen = (props) => {

  let funnyPhrase = '';
  switch (props.workoutDays.length) {
    case 1:
      funnyPhrase = 'Só 1 dia não vai adiantar muito, mas...';
      break;
  
    case 2:
      funnyPhrase = '2 dias eu acho pouco, mas quem sou eu pra te julgar ?';
      break;
    case 3:
      funnyPhrase = 'Legal, 3 dias dá pro gasto...';
      break;
    case 4:
      funnyPhrase = 'Legal, 4 dias vai ser TOP !';
      break;
    case 5:
      funnyPhrase = 'É isso ai, 5 dias é o mínimo, lets GO !';
      break;      
    case 6:
      funnyPhrase = 'É, 6 dias não é pra todo mundo...';
      break;   
    case 7:
      funnyPhrase = 'Wooow! Todo dia ? !!!';
      break;  
  }

  const setMyLevel = (level) => {
    props.setLevel(level);
    props.navigation.setParams({ level: level });
  };

  return (
    <Container>
      <HeaderText> {funnyPhrase} </HeaderText>
      <HeaderText>
        <BoldText>
          Qual o seu nível de treinamento ?
        </BoldText> 
      </HeaderText>

      <LevelArea>
        <DefaultButton bgcolor={props.level=='beginner'?'#A5E8BC':false} onPress={()=>setMyLevel('beginner')} underlayColor={"#CCC"}>
          <Texto>Iniciante / Um frango</Texto>
        </DefaultButton>
        <DefaultButton bgcolor={props.level=='intermediate'?'#A5E8BC':false} onPress={()=>setMyLevel('intermediate')} underlayColor={"#CCC"}>
          <Texto>Intermediário / Me viro bem</Texto>
        </DefaultButton>
        <DefaultButton bgcolor={props.level=='advanced'?'#A5E8BC':false} onPress={()=>setMyLevel('advanced')} underlayColor={"#CCC"}>
          <Texto>Avançado / Primo do The Rock</Texto>
        </DefaultButton>
      </LevelArea>
      
    </Container>
  );
}

Screen.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.level) {
      alert('Você precisa escolher uma opção.');
      return
    }
    navigation.navigate('StarterRecomendations');
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
    level: state.userReducer.level,
    workoutDays: state.userReducer.workoutDays,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLevel:(level) => dispatch({ type: 'SET_LEVEL', payload:{level} }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
