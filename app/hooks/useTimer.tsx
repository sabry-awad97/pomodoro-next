import { ask } from '@tauri-apps/api/dialog';
import { sendNotification } from '@tauri-apps/api/notification';
import { useState } from 'react';
import { initialTimerValue } from '../page';
import { useInterval } from './useInterval';

function useTimer(initialValue: number) {
  const [time, setTime] = useState(initialValue);
  const [timerStart, setTimerStart] = useState(false);

  const toggleTimer = () => {
    setTimerStart(!timerStart);
  };

  const resetTimer = async () => {
    const shouldReset = await ask('Do you want to reset timer?', {
      title: 'Pomodoro Timer App',
      type: 'warning',
    });

    if (shouldReset) {
      setTime(initialTimerValue);
      setTimerStart(false);
    }
  };

  useInterval(() => {
    if (timerStart) {
      if (time > 0) {
        setTime(prevTime => prevTime - 1);
      } else {
        sendNotification({
          title: `Time's up!`,
          body: `Congrats on completing a session!🎉`,
        });
        setTimerStart(false);
      }
    }
  }, 1000);

  const updateTimer = (time: number) => {
    setTimerStart(false);
    setTime(time);
  };

  return {
    time,
    timerStart,
    toggleTimer,
    resetTimer,
    updateTimer,
  };
}

export default useTimer;
