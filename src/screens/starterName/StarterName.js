import React from 'react';
import { connect } from 'react-redux';

//import DefaultButton from '../../components/DefaultButton';
import { Container, HeaderText, NameInput, NextButton } from './styles';
//import userReducer from '../../reducers/userReducer';

const Screen = (props) => {
  const nextAction = () => {
    if (!props.name) {
      alert('Você precisa de um nome!');
      return 
    };

    props.navigation.navigate('StarterDias');
  };

  const handleChangeName = (txt) => {
    props.setName(txt);
    props.navigation.setParams({ name:txt });
  };

  return (
    <Container>
      <HeaderText> Qual o seu nome ? </HeaderText>
      <NameInput 
        value={props.name}
        onChangeText={handleChangeName}
        autoFocus={true}
        autoCapitalize="words"
        onSubmitEditing={nextAction}
      />
    </Container>
  );
}

Screen.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.name) {
      alert('Você precisa de um nome!');
      return
    }
    navigation.navigate('StarterDias');
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
    name:state.userReducer.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName:(name) => dispatch({ type: 'SET_NAME', payload:{name} })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
