'use client';

import { ask } from '@tauri-apps/api/dialog';
import { sendNotification } from '@tauri-apps/api/notification';
import { useState } from 'react';
import TimerControls from './components/TimerControls';
import TimerDisplay from './components/TimerDisplay';
import TimerOptions from './components/TimerOptions';
import { useInterval } from './hooks/useInterval';

const initialTimerValue = 15 * 60; // Initial time set to 15 minutes

function App() {
  const [time, setTime] = useState(initialTimerValue);
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

  return (
    <div className="min-h-screen bg-gray-700 flex items-center flex-col">
      <h1 className="text-white font-bold mt-20 text-5xl">Pomodoro Timer</h1>
      {<TimerDisplay time={time} />}
      <TimerControls
        toggleTimer={toggleTimer}
        timerStart={timerStart}
        resetTimer={resetTimer}
      />
      {<TimerOptions onOptionClick={updateTimer} />}
    </div>
  );
}

export default App;
