import styled from 'styled-components/native';

export const Workout = styled.View`
  background-color: #F1F1F1;
  flex-direction: row;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 2px solid #DDD;
`;

export const WorkoutInfo = styled.View`
  flex: 1;
`;

export const WorkoutActions = styled.View`
  justify-content: center;
`;

export const WorkoutTitle = styled.Text`
  font-size: 17px;
  margin: 10px;
`;

export const MuscleScroll = styled.ScrollView`
  margin: 10px;
`;

export const WorkoutButtom = styled.TouchableHighlight`
  width: 25px;
  height: 25px;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

export const WorkoutButtomImage = styled.Image`
  width: 25px;
  height: 25px;
`;

export const MuscleGroup = styled.View`
  width: 40px;
  height: 40px;
  background-color: #FFCC98;
  border-radius: 5px;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
`;

export const MuscleImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export const TabBarArea = styled.SafeAreaView`
  flex-direction: row;
  background-color: #EEE;
`;

export const TabBarItem = styled.View`
  flex: 1;
  height: 65px;
  align-items: center;
`;

export const TabRegular = styled.TouchableHighlight`
  align-items: center;
`;

export const TabImage = styled.Image`
  width: 25px;
  height: 25px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const TabBall = styled.TouchableHighlight`
  width: 100px;
  height: 100px;
  background-color: #3BA237;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  border: 5px solid #FFF;
  margin-top: -50px; 
`;

export const TabBallImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Text = styled.Text``;

export const MonthScroll = styled.ScrollView`
  width: 100%;
  height: 60px;
`;

export const MonthButton = styled.TouchableHighlight`
  width: ${props=>props.width};
  justify-content: center;
  align-items: center;
`;

export const MonthText = styled.Text``;

export const MonthItem = styled.View`
  width: 90%;
  height: 30px;
  background-color: #EEE;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const DaysScroll = styled.ScrollView`
  width: 100%;
  height: 50px;
`;

export const DayButton = styled.TouchableHighlight`
  width: ${props=>props.width};
  justify-content: center;
  align-items: center;
`;

export const DayItem = styled.View`
  width: 30px
  height: 30px;
  border-radius: 15px;
  background-color: #EEE;
  justify-content: center;
  align-items: center;
`;

export const DayText = styled.Text``;

export const BalloonTriangle = styled.View`
  width: 0px;
  height: 0px;
  borderLeftColor: transparent;
  borderLeftWidth: 15;
  borderBottomWidth: 15;
  borderBottomColor: #EDEDED;
  borderRightWidth: 15;
  borderRightColor: transparent;
`;

export const BalloonArea = styled.View`
  width: 90%;
  padding: 10%;
  background-color: #EDEDED;
  border-radius: 10px;
  height: 20%;
  align-items: center;
  justify-content: center;
`;

export const BalloonBigText = styled.Text`
  font-size: 15px;
  align-self: center;
`;

export const DefaultButton = styled.TouchableHighlight`
  width: ${props=>props.width || 'auto'};
  background-color: #4AC34E;
  padding: 10px 20px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  margin-top: 10px;
  align-self: center;
`;

export const BalloonText = styled.Text`
  font-size: 13px;
  align-self: center;
`;

export const ExerciseItemArea = styled.TouchableHighlight`
  height: 50px;
  flex-direction: row;
  background-color: #FFF;
  margin-bottom: 10px;
`;

export const ExerciseMuscleArea = styled.View`
  width: 50px;
  height: 50px;
  background-color: #FFCC98;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ExerciseMuscleImage = styled.Image`
  width: 35px;
  height: 35px;
`;

export const ExerciseInfo = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;

export const ExerciseName = styled.Text`
  font-size: 15px;
  color: #000;
`;

export const ExerciseDetails = styled.Text`
  font-size: 12px;
  color: #999;
`;

export const ExerciseSwipe = styled.TouchableHighlight`
  height: 50px;
  background-color: #FF0000;
  justify-content: center
`;

export const ExerciseSwipeIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 15px;
`;

export const ModalBoxArea = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.View`
  width:90%;
  padding: 20px;
  background-color: #FFF;
`;

export const ModalClose = styled.TouchableHighlight`
  height: 40px;
  align-self: flex-end;  
`;

export const CloseText = styled.Text`
  font-size: 25px;
`;

export const ModalBody = styled.View``;

export const ExerciseItemAreaa = styled.View`
  height: 50px;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ExerciseNamee = styled.Text`
  font-size: 15px;
  color: #FFF;
`;

export const ExerciseCheck = styled.TouchableHighlight`
  width: 60px;
  justify-content: center;
  align-items: center;
`;

export const ExerciseDone = styled.Image`
  width: 40px;
  height: 40px;
`;

export const ExerciseUnDone = styled.View`
  width: 40px;
  height: 40px;
  border: 5px solid #FFF;
  border-radius: 20px;
`;

export const ExerciseInfoo = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;

export const ExerciseCount = styled.View`
  width: 25px;
  justify-content: center;
`;

export const ExerciseCountText = styled.Text`
  font-size: 17px;
  color: #FFF;
`;

