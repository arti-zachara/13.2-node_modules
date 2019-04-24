var os = require("os"),
  time = require("./time"),
  colors = require("colors");

// getting system info
function getOSinfo() {
  var type = os.type();
  if (type === "Darwin") {
    type = "OSX";
  } else if (type === "Windows_NT") {
    type = "Windows";
  }
  var release = os.release();
  var cpu = os.cpus()[0].model;

  var uptime = time.timeDisplay(os.uptime());
  var userInfo = os.userInfo();

  console.log("System:".grey, type);
  console.log("Release:".red, release);
  console.log("CPU model:".cyan, cpu);
  console.log("Uptime: ~".green, uptime);
  console.log("User name:".yellow, userInfo.username);
  console.log("Home dir:".white, userInfo.homedir);
}
exports.print = getOSinfo;
