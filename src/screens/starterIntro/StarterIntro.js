import React from 'react';

import {
  Container, WelcomeText, WelcomeImage, WelcomeLogo, BeginConfigArea, ButtonText,
} from './styles';

import DefaultButton from '../../components/DefaultButton';

const Screen = (props) => {

  const start = () => {
    props.navigation.navigate('StarterName');
  }

  return (
    <Container>
      <WelcomeText> Bem vindo ao DevFit </WelcomeText>
      <WelcomeImage>
        <WelcomeLogo source={require('../../assets/boneco.png')} />
      </WelcomeImage>
      <BeginConfigArea>
        <DefaultButton width="100%" bgcolor="#0072C0" underlayColor="#0B7AC6" onPress={start}>
          <ButtonText> Iniciar configuração </ButtonText>
        </DefaultButton>
      </BeginConfigArea>
    </Container>
  );
}

Screen.navigationOptions = {
  header: null,
};

export default Screen;
