'use client';

import { FC } from 'react';

interface Props {
  toggleTimer: () => void;
  timerStart: boolean;
  resetTimer: () => Promise<void>;
}

const TimerControls: FC<Props> = function ({
  resetTimer,
  timerStart,
  toggleTimer,
}) {
  return (
    <div className="flex mt-5">
      <button
        className="w-28 bg-red-500 text-white py-2 px-4 rounded"
        onClick={toggleTimer}
      >
        {!timerStart ? 'Start' : 'Pause'}
      </button>
      <button
        className="bg-blue-300 mx-5 py-2 px-4 rounded"
        onClick={resetTimer}
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
