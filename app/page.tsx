'use client';

import Heading from './components/Heading';
import TimerControls from './components/TimerControls';
import TimerDisplay from './components/TimerDisplay';
import TimerOptions from './components/TimerOptions';
import useTimer from './hooks/useTimer';

export const initialTimerValue = 5 * 60; // Initial time set to 15 minutes

function App() {
  const { time, timerStart, toggleTimer, resetTimer, updateTimer } =
    useTimer(initialTimerValue);

  return (
    <div className="min-h-screen bg-gray-700 flex items-center flex-col">
      <Heading />
      <TimerDisplay time={time} />
      <TimerControls
        timerStart={timerStart}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
      />
      <TimerOptions onOptionClick={updateTimer} />
    </div>
  );
}

export default App;
