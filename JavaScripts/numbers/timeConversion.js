function digitalClock(seconds){
  let hours = 00;
  let minutes = 00;
  let sec = 00;
  while (seconds >= 60){
    minutes++
    seconds = seconds - 60;
  }
  while (minutes >= 60){
    hours++
    minutes = minutes - 60;
  }
  if (hours >= 24){
    hours = hours - 24;
    
  }
  date1 = new Date();
  date1.setSeconds(seconds);
  date1.setMinutes(minutes);
  date1.setHours(hours);
  return date1.toLocaleTimeString('en-US', {hour12: false});
}