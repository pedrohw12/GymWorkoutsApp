import React, { useState, useEffect } from 'react';
import { 
  BalloonTriangle, 
  BalloonArea, 
  BalloonBigText, 
  DefaultButton,
  ButtonText,
  BalloonText, 
} from './styles';

export default (props) => {
  let today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  let thisDate = new Date(today.getFullYear(), props.selectedMonth, props.selectedDay);

  let thisYear = thisDate.getFullYear();
  let thisMonth = thisDate.getMonth() + 1;
  let thisDay = thisDate.getDate();
  thisMonth = (thisMonth<10)?'0'+thisMonth:thisMonth;
  thisDay = (thisDay<10)?'0'+thisDay:thisDay;
  let dFormated = `${thisYear}-${thisMonth}-${thisDay}`;

  let dayOff = false;
  let isToday = false;
  let isFuture = false;
  let isDone = false;

  if (!props.workoutDays.includes(thisDate.getDay())) {
    dayOff = true;
  } else if(thisDate.getTime() > today.getTime()) {
    isFuture = true;
  } else {
      if (props.dailyProgress.includes(dFormated)) {
          isDone = true;
      }   else {
            isDone = false;
      }
  }

  if(thisDate.getTime() == today.getTime()) {
    isToday = true;
  }

  const setDone = () => {
    props.addProgress(dFormated);
  };

  const setUnDone = () => {
    props.delProgress(dFormated);
  };

  const [ timeLeft, setTimeLeft ] = useState('');

  useEffect(()=>{
    const timerFunction = () => {
      let now = Date.now();
      let endToday = new Date();
      endToday.setHours(23);
      endToday.setMinutes(59);
      endToday.setSeconds(59);
      endToday = endToday.getTime();
      let diff = endToday - now;

      let h = Math.floor(diff / (1000 * 60 * 60));
      let m = Math.floor((diff / (1000 * 60)) - (h * 60));
      let s = Math.floor((diff / 1000) - (m*60) - ((h*60)*60) );

      h = h<10?'0'+h:h;
      m = m<10?'0'+m:m;
      s = s<10?'0'+s:s;

      setTimeLeft(`${h}h ${m}m ${s}s`);
    };
    let timer = setInterval(timerFunction, 1000);
      timerFunction();
      
      return ()=>clearInterval(timer);
  }, []);

  return (
    <>
      <BalloonTriangle></BalloonTriangle>
      <BalloonArea>
        {dayOff &&
          <BalloonBigText> Dia de descanso </BalloonBigText>
        }
        {isFuture &&
          <BalloonBigText> Data no futuro </BalloonBigText>
        }
        {!dayOff && !isFuture && isDone &&
          <>
            <BalloonBigText> Parabéns, você treinou ! </BalloonBigText>
            <DefaultButton onPress={setUnDone} style={{marginTop: 20}} underlayColor="transparent">
              <ButtonText> Desmarcar </ButtonText>
            </DefaultButton>
          </>
        }
        {!dayOff && !isFuture && !isDone && !isToday &&
          <>
            <BalloonBigText> Fraco! Você falhou neste dia! </BalloonBigText>
            <DefaultButton onPress={setDone} style={{marginTop: 20}} underlayColor="transparent">
              <ButtonText> Marcar como feito </ButtonText>
            </DefaultButton>
          </>
        }
        {!dayOff && !isFuture && !isDone && isToday &&
          <>
          <BalloonBigText> Hoje tem treino !</BalloonBigText>
          <BalloonText> Você tem {timeLeft} para treinar </BalloonText>
          <DefaultButton onPress={props.goToWorkout} style={{marginTop: 20}} underlayColor="transparent">
            <ButtonText> Iniciar treino. </ButtonText>
          </DefaultButton>
        </>
        }
      </BalloonArea>
    </>
  );
};