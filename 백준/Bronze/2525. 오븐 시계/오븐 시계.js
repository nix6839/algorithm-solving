const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [startTimeStr, durationMinuteStr] = input.split('\n');

const [startHour, startMinute] = startTimeStr
  .split(' ')
  .map((str) => parseInt(str, 10));
const durationMinute = parseInt(durationMinuteStr, 10);

function getEndTime(startHour, startMinute, durationMinute) {
  const [overflowHour, endMinute] = minuteToHourAndMinute(
    startMinute + durationMinute,
  );
  const endHour = startHour + overflowHour;

  if (endHour >= 24) {
    return [endHour - 24, endMinute];
  }
  return [endHour, endMinute];
}

function minuteToHourAndMinute(minute) {
  if (minute < 60) {
    return [0, minute];
  }
  return [Math.floor(minute / 60), minute % 60];
}

const [endHour, endMinute] = getEndTime(startHour, startMinute, durationMinute);

console.log(endHour, endMinute);
