/* exported Stopwatch */

function Stopwatch(startTimeInSeconds) {
  this.elapsedSeconds = startTimeInSeconds;
}

Stopwatch.prototype.tick = function () {
  this.elapsedSeconds++;
};

Stopwatch.prototype.getTime = function () {
  let seconds = this.elapsedSeconds;
  const secondsPerHour = 3600;
  let hours = Math.floor(seconds / secondsPerHour);
  seconds -= secondsPerHour * hours;
  const secondsPerMinute = 60;
  let minutes = Math.floor(seconds / secondsPerMinute);
  seconds -= secondsPerMinute * minutes;
  hours = hours.toString();
  hours = hours.padStart(2, '0');
  minutes = minutes.toString();
  minutes = minutes.padStart(2, '0');
  seconds = seconds.toString();
  seconds = seconds.padStart(2, '0');
  return hours + ':' + minutes + ':' + seconds;
};

Stopwatch.prototype.reset = function () {
  this.elapsedSeconds = 0;
};
