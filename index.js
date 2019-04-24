var OSinfo = require("./modules/OSinfo");

process.stdin.setEncoding("utf-8");

//greetings message
process.stdout.write(
  "Type: \n '/exit' to quit,\n '/version' for version and encoding info,\n '/sayhello' for greetings message,\n '/getOSinfo' for system info\n"
);

// on reading function
process.stdin.on("readable", function() {
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();
    // trim - remove white spaces and others like tabs or enters
    switch (instruction) {
      case "/exit":
        process.stdout.write("Quitting app!\n");
        process.exit();
        break;

      case "/sayhello":
        process.stdout.write("hello!\n");
        break;

      case "/getOSinfo":
        // get system information
        OSinfo.print();
        break;

      case "/version":
        // display info on node version and encoding
        process.stdout.write(
          "version: " +
            process.versions.node +
            "\n" +
            "encoding: " +
            process.env.lang +
            "\n"
        );
        break;

      default:
        // error message
        process.stderr.write("Wrong instruction!");
    }
  }
});
