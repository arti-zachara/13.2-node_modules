process.stdin.setEncoding("utf-8");

//greeting message
process.stdout.write(
  "Type '/exit' to quit or 'version' for version and encoding info.\n"
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
      case "version":
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
