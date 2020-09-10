function clockHandAngles(seconds) {
  var degrees =  360/60;
  var minutes = 0;
  var hours = 0;
  
  while (seconds >= 60)
    {
      minutes++;
      seconds -= 60;
       while (minutes >= 60)
        {
          hours++;
          minutes -=60;
        }
    }
 
  var secondsAtDegree = seconds * degrees;
  var minutesAtDegree = minutes * degrees;
  var hoursAtDegree = hours * degrees;
  console.log("SecondsAtDegrees:" + secondsAtDegree); 
  console.log("MinutesAtDegrees:" + minutesAtDegree);
  console.log("HourAtDegrees:" + hoursAtDegree);
}
clockHandAngles(11115);