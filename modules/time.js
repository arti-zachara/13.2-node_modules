function secondsToHhMinSec(time) {
  var hours = Math.floor(time / 3600);
  var minutes = Math.floor((time % 3600) / 60);
  var seconds = Math.floor((time % 3600) % 60);
  var hrDisplay =
    hours > 0 ? hours + (hours == 1 ? " hour, " : " hours, ") : "";
  var minDisplay =
    minutes > 0 ? minutes + (minutes == 1 ? " minute, " : " minutes, ") : "";
  var secDisplay =
    seconds > 0 ? seconds + (seconds == 1 ? " second" : " seconds") : "";

  return hrDisplay + minDisplay + secDisplay;
}

exports.timeDisplay = secondsToHhMinSec;
