const calcTime = (hour, minute, interval) => {
  let h = hour;
  let m = minute + interval;
  if (m >= 60) {
    h = h + Math.floor(m / 60);
    m = m % 60;
  }
  if (h >= 24) {
    h = h - 24;
  }
  return { hour: h, minute: m };
};

const formatTime = (hour, minute) => {
  return `${String(hour).padStart(2, '0')} : ${String(minute).padStart(2, '0')}`;
};

export { calcTime, formatTime } ;
