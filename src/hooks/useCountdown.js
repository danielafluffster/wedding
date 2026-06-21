import { useState, useEffect } from 'react';

const TBD_RESULT = { days: 0, hours: 0, minutes: 0, seconds: 0, done: false };

function getTimeLeft(targetISO) {
  if (!targetISO) return TBD_RESULT;
  const diff = new Date(targetISO) - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000)  /    60_000),
    seconds: Math.floor((diff %    60_000)  /     1_000),
    done: false,
  };
}

export function useCountdown(targetISO) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetISO));

  useEffect(() => {
    if (!targetISO || timeLeft.done) return;
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetISO)), 1000);
    return () => clearInterval(id);
  }, [targetISO, timeLeft.done]);

  return timeLeft;
}
