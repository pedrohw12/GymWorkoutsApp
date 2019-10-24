import React from 'react';
import { SwipeRow } from 'react-native-swipe-list-view';
import { 
  ExerciseItemArea,
  ExerciseMuscleArea,
  ExerciseMuscleImage,
  ExerciseInfo,
  ExerciseName,
  ExerciseDetails,
  ExerciseSwipe,
  ExerciseSwipeIcon,
 } from './styles';
import useMuscleImage from './useMuscleImage';

export default (props) => {
   return (
    <SwipeRow leftOpenValue={50} disableLeftSwipe={true} >
      <ExerciseSwipe onPress={props.delAction} underlayColor="#FF0000">
        <ExerciseSwipeIcon source={require('../assets/trash-white.png')} />
      </ExerciseSwipe>

      <ExerciseItemArea onPress={props.editAction} underlayColor="#FFF">
        <>
          <ExerciseMuscleArea>
            <ExerciseMuscleImage  source={useMuscleImage(props.data.muscle)} />
          </ExerciseMuscleArea>

            <ExerciseInfo>
              <ExerciseName> {props.data.name} </ExerciseName>
              <ExerciseDetails>
                {`${props.data.sets} séries - ${props.data.reps} reps ${props.data.load?`- ${props.data.load} kg`:''}`}
              </ExerciseDetails>
            </ExerciseInfo>
        </>
      </ExerciseItemArea>
    </SwipeRow>
   );
};
