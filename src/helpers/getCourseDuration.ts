function getCourseDuration(durationInMinutes: number): string {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;

  const hourWord = hours === 1 ? 'hour' : 'hours';

  return `${hoursStr}:${minutesStr} ${hourWord}`;
}

export { getCourseDuration };
export default getCourseDuration;
