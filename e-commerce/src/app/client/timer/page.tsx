"use client"
import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const Timer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
      <div className="flex flex-col p-1.5 bg-secondary rounded-lg text-secondary-content">
        <span className="countdown text-3xl">{days}</span>
        <span className="text-xs">days</span>
      </div>
      <div className="flex flex-col p-1.5 bg-secondary rounded-lg text-secondary-content">
        <span className="countdown text-3xl">{hours}</span>
        <span className="text-xs">hours</span>
      </div>
      <div className="flex flex-col p-1.5 bg-secondary rounded-lg text-secondary-content">
        <span className="countdown text-3xl">{minutes}</span>
        <span className="text-xs">minutes</span>
      </div>
      <div className="flex flex-col p-1.5 bg-secondary rounded-lg text-secondary-content">
        <span className="countdown text-3xl">{seconds}</span>
        <span className="text-xs">seconds</span>
      </div>
    </div>
  );
};

export default Timer;
