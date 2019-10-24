import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  color: #FFF;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 40px;
`;

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

export const NextButton = styled.Button``;

export const BoldText = styled.Text`
  font-weight: bold;
`;

export const Texto = styled.Text``;

export const DaysArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const DefaultButton = styled.TouchableHighlight`
  width: ${props=>props.width || 'auto'};
  background-color: ${props=>props.bgcolor || '#EEE'};
  padding: 10px 20px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;


