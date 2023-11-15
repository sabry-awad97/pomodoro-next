'use client';

import { FC } from 'react';

const BUTTON_TIMES = [
  {
    value: 15 * 60,
    display: '15 minutes',
  },
  {
    value: 30 * 60,
    display: '30 minutes',
  },
  {
    value: 60 * 60,
    display: '60 minutes',
  },
];

interface Props {
  onOptionClick: (time: number) => void;
}

const TimerOptions: FC<Props> = ({ onOptionClick: updateTimer }) => {
  return (
    <div className="flex mt-10">
      {BUTTON_TIMES.map(({ value, display }) => (
        <button
          key={value}
          className="mx-4 bg-green-300 text-white py-2 px-4 rounded"
          onClick={() => updateTimer(value)}
        >
          {display}
        </button>
      ))}
    </div>
  );
};

export default TimerOptions;
