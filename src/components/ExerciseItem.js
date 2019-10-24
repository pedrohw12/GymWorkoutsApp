import React from 'react';
import { 
  ExerciseItemAreaa,
  ExerciseMuscleArea,
  ExerciseMuscleImage,
  ExerciseInfo,
  ExerciseNamee,
  ExerciseDetails,
  ExerciseCheck,
  ExerciseDone,
  ExerciseUnDone,
  ExerciseInfoo,
  ExerciseCount,
  ExerciseCountText,
 } from './styles';
import useMuscleImage from './useMuscleImage';

export default (props) => {
   return (
      <ExerciseItemAreaa>
        <>
          <ExerciseCount>
            <ExerciseCountText> {props.index+1}. </ExerciseCountText>
          </ExerciseCount>
          <ExerciseMuscleArea>
            <ExerciseMuscleImage  source={useMuscleImage(props.data.muscle)} />
          </ExerciseMuscleArea>

            <ExerciseInfoo>
              <ExerciseNamee> {props.data.name} </ExerciseNamee>
              <ExerciseDetails>
                {`${props.data.sets} séries - ${props.data.reps} reps ${props.data.load?`- ${props.data.load} kg`:''}`}
              </ExerciseDetails>
            </ExerciseInfoo>
            <ExerciseCheck onPress={props.checkAction} underlayColor="transparent">
              {props.data.done ? <ExerciseDone source={require('../assets/check-white.png')} />:<ExerciseUnDone></ExerciseUnDone>}
            </ExerciseCheck>
        </>
      </ExerciseItemAreaa>
   );
};
