import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import ExerciseItemEdit from '../../components/ExerciseItemEdit';
import CustomModal from '../../components/CustomModal';

import { 
  Container,
  SaveArea,
  SaveImage,
  NameInput,
  DefaultButton,
  ButtonText,
  ExercisesArea,
  ExercisesList,
  ModalLabel,
  ModalMuscles,
  ModalInput,
  ModalMuscle,
  ModalMuscleImage,
  ModalExtra,
  ModalExtraItem,
} from './styles';

const Screen = (props) => {
  let workout = (props.navigation.state.params && 
                 props.navigation.state.params.workout)?
                 props.navigation.state.params.workout:false;

  const [ id, setId ] = useState(workout?workout.id:'');               
  const [ name,setName ] = useState(workout?workout.name:'');
  const [ exercises, setExercises ] = useState(workout?workout.exercises:[]);

  const [ modalVisible, setModalVisible ] = useState(false);
  const [ modalId, setModalId ] = useState('');
  const [ modalName, setModalName ] = useState('');
  const [ modalMuscle, setModalMuscle ] = useState('');
  const [ modalSets, setModalSets ] = useState('');
  const [ modalReps, setModalReps ] = useState('');
  const [ modalLoad, setModalLoad ] = useState('');

  useEffect(()=>{
    props.navigation.setParams({
      workout: { id, name, exercises, },
      addWorkout: props.addWorkout,
      editWorkout: props.editWorkout,
    });
  }, [ name, exercises ]);

  const editExercise = (exercise) => {
    setModalId(exercise.id);
    setModalName(exercise.name);
    setModalMuscle(exercise.muscle);
    setModalSets(exercise.sets);
    setModalReps(exercise.reps);
    setModalLoad(exercise.load);
    setModalVisible(true);
  };

  const delExercise = (exercise) => {
    let newExercises = [ ...exercises ];
    newExercises = newExercises.filter(i=>i.id!=exercise.id);
    setExercises(newExercises);
  };

  const modalSave = () => {
    let newExercises = [ ...exercises ];

    if (modalName == '' || modalMuscle == '' || modalSets == '' || modalReps == '') {
      alert('Preencha todas as informações');
      return;
    }

    if (modalId) {
      let index = newExercises.findIndex(i=>i.id == modalId);
      if(index > -1) {
        newExercises[index].name = modalName;
        newExercises[index].muscle = modalMuscle;
        newExercises[index].sets = modalSets;
        newExercises[index].reps = modalReps;
        newExercises[index].load = modalLoad;
      }
    } else {
      let ex = {
        id:uuid(),
        name: modalName,
        muscle: modalMuscle,
        sets: modalSets,
        reps: modalReps,
        load: modalLoad,
      };
      newExercises.push(ex);
    }

    setExercises(newExercises);
    setModalVisible(false);
  };

  const resetModal = () => {
    setModalId('');
    setModalName('');
    setModalMuscle('');
    setModalSets('');
    setModalReps('');
    setModalLoad('');
  };

  const addExercise = () => {
    resetModal();
    setModalVisible(true);
  };

  return (
    <Container>
      <CustomModal visible={modalVisible} closeAction={()=>setModalVisible(false)}>
        <ModalLabel> Músculo de foco </ModalLabel>
        <ModalMuscles horizontal={true} showsHorizontalScrollIndicator={false}>
          <ModalMuscle 
            opacity={modalMuscle=='abs'?1:0.3} 
            onPress={()=>setModalMuscle('abs')} 
            underlayColor="transparent">
            <ModalMuscleImage source={require('../../assets/muscles/abs.png')} />
          </ModalMuscle>
          <ModalMuscle 
            opacity={modalMuscle=='back'?1:0.3} 
            onPress={()=>setModalMuscle('back')} 
            underlayColor="transparent">
            <ModalMuscleImage source={require('../../assets/muscles/back.png')} />
          </ModalMuscle>
          <ModalMuscle 
            opacity={modalMuscle=='biceps'?1:0.3} 
            onPress={()=>setModalMuscle('biceps')} 
            underlayColor="transparent">
            <ModalMuscleImage source={require('../../assets/muscles/biceps.png')} />
          </ModalMuscle>
          <ModalMuscle 
            opacity={modalMuscle=='chest'?1:0.3} 
            onPress={()=>setModalMuscle('chest')} 
            underlayColor="transparent">
            <ModalMuscleImage source={require('../../assets/muscles/chest.png')} />
          </ModalMuscle>
          <ModalMuscle 
            opacity={modalMuscle=='gluteos'?1:0.3} 
            onPress={()=>setModalMuscle('gluteos')} 
            underlayColor="transparent">
            <ModalMuscleImage source={require('../../assets/muscles/gluteos.png')} />
          </ModalMuscle>
          <ModalMuscle 
            opacity={modalMuscle=='legs'?1:0.3} 
            onPress={()=>setModalMuscle('legs')} 
            underlayColor="transparent">
            <ModalMuscleImage source={require('../../assets/muscles/legs.png')} />
          </ModalMuscle>
          <ModalMuscle 
            opacity={modalMuscle=='shoulders'?1:0.3} 
            onPress={()=>setModalMuscle('shoulders')} 
            underlayColor="transparent">
            <ModalMuscleImage source={require('../../assets/muscles/shoulders.png')} />
          </ModalMuscle>
          <ModalMuscle 
            opacity={modalMuscle=='triceps'?1:0.3} 
            onPress={()=>setModalMuscle('triceps')} 
            underlayColor="transparent">
            <ModalMuscleImage source={require('../../assets/muscles/triceps.png')} />
          </ModalMuscle>
        </ModalMuscles>

        <ModalLabel> Nome do exercício</ModalLabel>
        <ModalInput value={modalName} onChangeText={(txt)=>setModalName(txt)} />

        <ModalExtra>
          <ModalExtraItem>
            <ModalLabel> Séries </ModalLabel>
            <ModalInput keyboardType="numeric" value={modalSets} onChangeText={(txt)=>setModalSets(txt)} />
          </ModalExtraItem>
          <ModalExtraItem>
            <ModalLabel> Repetições </ModalLabel>
            <ModalInput keyboardType="numeric" value={modalReps} onChangeText={(txt)=>setModalReps(txt)} />
          </ModalExtraItem>
          <ModalExtraItem>
            <ModalLabel> Carga </ModalLabel>
            <ModalInput keyboardType="numeric" value={modalLoad} onChangeText={(txt)=>setModalLoad(txt)} />
          </ModalExtraItem>
        </ModalExtra>

        <DefaultButton onPress={modalSave} underlayColor="transparent">
          <ButtonText> Salvar </ButtonText>
        </DefaultButton>
      </CustomModal>
      <NameInput 
        value={name}
        onChangeText={(item)=>setName(item)}
        placeholder="Digite o nome do treino"
      />
      <ExercisesArea>
        <DefaultButton onPress={addExercise} underlayColor="transparent">
          <ButtonText> Adicionar exercício </ButtonText>
        </DefaultButton>

        <ExercisesList 
          data={exercises}
          renderItem={({item})=>
            <ExerciseItemEdit 
              data={item} 
              editAction={()=>editExercise(item)}
              delAction={()=>delExercise(item)}
              />
          }
          keyExtractor={item=>item.name}
        />
      </ExercisesArea>
    </Container>
  );
}

Screen.navigationOptions = ({navigation}) => {
  let isEdit = (navigation.state.params && navigation.state.params.workout.id)?true:false;

  const SaveWorkoutButton = () => {
    const handleSave = () => {
      if (navigation.state.params && navigation.state.params.workout) {
        let workout = navigation.state.params.workout;

        if (workout.exercises.length > 0) {
          if (workout.id != '') {
            navigation.state.params.editWorkout(workout);
          } else {
            workout.id = uuid();
            navigation.state.params.addWorkout(workout);
          }
          
          navigation.goBack();
        } else {
          alert('Você precisa ter pelo menos um exercício')
        }
      }
    };

    return (
      <SaveArea onPress={handleSave}>
        <SaveImage source={require('../../assets/check-black.png')} />
      </SaveArea>
    );
  };

  return {
    title:isEdit?'Editar treino':'Adicionar treino',
    headerRight: <SaveWorkoutButton />,
    headerRightContainerStyle: {
      marginRight: 10
    }
  }
};

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addWorkout: (workout)=> dispatch({type: 'ADD_WORKOUT', payload:{workout}}),
    editWorkout: (workout)=> dispatch({type: 'EDIT_WORKOUT', payload:{workout}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
