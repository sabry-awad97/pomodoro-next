'use client';

import { useEffect, useState } from 'react';

const buttons = [
  {
    value: 900,
    display: '15 minutes',
  },
  {
    value: 1800,
    display: '30 minutes',
  },
  {
    value: 3600,
    display: '60 minutes',
  },
];

function App() {
  const [time, setTime] = useState(0);
  const [timerStart, setTimerStart] = useState(false);

  const toggleTimer = () => {
    setTimerStart(!timerStart);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerStart) {
        if (time > 0) {
          setTime(time - 1);
        } else if (time === 0) {
          // TODO: Send notification to the user.
          clearInterval(interval);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timerStart, time]);

  return (
    <div className="min-h-screen bg-gray-700 flex items-center flex-col">
      <h1 className="text-white font-bold mt-20 text-5xl">Pomodoro Timer</h1>
      <div className="text-white font-bold text-7xl mt-5">
        {`${
          Math.floor(time / 60) < 10
            ? `0${Math.floor(time / 60)}`
            : Math.floor(time / 60)
        }:${time % 60 < 10 ? `0${time % 60}` : time % 60}`}
      </div>
      <div className="flex mt-5">
        <button
          className="w-28 bg-red-700 text-white py-2 px-4 rounded"
          onClick={toggleTimer}
        >
          {!timerStart ? 'Start' : 'Pause'}
        </button>
        {/* TODO: Add Button to reset timer */}
      </div>
      <div className="flex mt-10">
        {buttons.map(({ value, display }) => (
          <button
            key={value}
            className="mx-4 bg-green-300 text-white py-2 px-4 rounded"
            onClick={() => {
              setTimerStart(false);
              setTime(value);
            }}
          >
            {display}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
