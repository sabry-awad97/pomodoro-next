import { FC } from 'react';

interface Props {
  time: number;
}

const TimerDisplay: FC<Props> = ({ time }) => {
  return (
    <div className="text-white font-bold text-7xl mt-5">
      {`${String(Math.floor(time / 60)).padStart(2, '0')}:${String(
        time % 60
      ).padStart(2, '0')}`}
    </div>
  );
};

export default TimerDisplay;
