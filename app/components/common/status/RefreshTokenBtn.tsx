import React, { useState, useEffect, useCallback } from 'react';
interface TimerButtonProps {
  onRefresh: () => void;
}

const TimerButton = ({ onRefresh }: TimerButtonProps) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 분 
  const [isHovered, setIsHovered] = useState(false);

  const formatTime = useCallback((seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    onRefresh();
    setTimeLeft(300); // Reset 5분 
  };

  return (
    <div
      className="inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <button
         type="button"
          onClick={handleRefresh}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Refresh
        </button>
      ) : (
        <div className={`py-2 px-4 rounded ${timeLeft === 0 ? 'bg-yellow-100' : 'bg-gray-100'}`}>
          <span className={`font-mono ${timeLeft === 0 ? 'text-yellow-700' : ''}`}>{formatTime(timeLeft)}</span>
        </div>
      )}
    </div>
  );
};

export default TimerButton;