import React, { useState } from 'react';
import { 
  Workout,
  WorkoutInfo,
  WorkoutTitle,
  MuscleScroll,
  WorkoutActions,
  WorkoutButtom,
  WorkoutButtomImage,
  MuscleGroup,
  MuscleImage
 } from './styles';

 import useMuscleImage from '../components/useMuscleImage';

export default (props) => {
  const [ included, setIncluded ] = useState(false);

  let muscleGroups = [];
  for(let i in props.data.exercises) {
    if (!muscleGroups.includes(props.data.exercises[i].muscle)) {
      muscleGroups.push(props.data.exercises[i].muscle);
    }
  };

  const addWorkout = () => {
    setIncluded(!included);
    props.addAction();
  };

  const editWorkout = () => {
    props.editAction();
  };

  const delWorkout = () => {
    props.delAction();
  };

  const goWorkout = () => {
    props.goAction();
  };

  return (
    <Workout>
      <WorkoutInfo>
        <WorkoutTitle> {props.data.name} </WorkoutTitle>
        <MuscleScroll horizontal={true}>
          {muscleGroups.map((m, index)=>(
            <MuscleGroup key={index}>
              <MuscleImage source={useMuscleImage(m)} />
            </MuscleGroup>
          ))}
        </MuscleScroll>
      </WorkoutInfo>
      <WorkoutActions>
        {props.addAction &&
          <WorkoutButtom onPress={()=>addWorkout()} underlayColor="transparent">
            <WorkoutButtomImage source={included?require('../assets/check-black.png'):require('../assets/add.png')}/>
          </WorkoutButtom>
        }
        {props.editAction &&
          <WorkoutButtom onPress={()=>editWorkout()} underlayColor="transparent">
            <WorkoutButtomImage source={require('../assets/edit-black.png')}/>
          </WorkoutButtom>
        }
        {props.delAction &&
          <WorkoutButtom onPress={()=>delWorkout()} underlayColor="transparent">
            <WorkoutButtomImage source={require('../assets/trash-black.png')}/>
          </WorkoutButtom>
        }
        {props.goAction &&
          <WorkoutButtom onPress={()=>goWorkout()} underlayColor="transparent">
            <WorkoutButtomImage source={require('../assets/play-black.png')}/>
          </WorkoutButtom>
        }
      </WorkoutActions>
    </Workout>
  );
};