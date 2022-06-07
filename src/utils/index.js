//Conver second to time
export function toTime(seconds=0) {
  if (seconds < 0) return "-" + toTime(-seconds);
  return new Date(seconds * 1000).toISOString().substr(11, 8);
}


export const convertTimeToSeconds = (time) => {
  const splittedTime = time?.split(":")
  const hourToMinutes = parseInt(splittedTime[0]) * 60
  const timeInMinutes = parseInt(splittedTime[1]) + hourToMinutes
  const timeInSeconds = timeInMinutes * 60
  return timeInSeconds
}