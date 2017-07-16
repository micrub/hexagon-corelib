import cliparse from "cliparse";
import fs from "fs";

const PARSERS = cliparse.parsers;

class Cli {
  init(options) {
    var dirname = this.handleOptions({destination: options.args[0]});
    console.log(this);
    this.next(null, options);
  }
  add(o) {
    this.next(null, o);
  }
  build(o) {
    this.next(null, o);
  }
  handleOptions(options) {
    let self = this;
    if (options instanceof Object) {
      if (options.destination) {
        let dirname = options.destination;
        if (typeof dirname === "string") {
          if (dirname.length) {
            let error = fs.accessSync(
              dirname,
              fs.constants.R_OK | fs.constants.W_OK
            );
            if (error) {
              throw new Error(error);
            } else {
              self.dirname = dirname;
              let destDirContent = fs.readdirSync(dirname);
              if (destDirContent.length) {
                throw new Error(
                  "Destination folder " + dirname + " is not empty."
                );
              } else {
                return dirname;
              }
            }
          } else {
            throw new Error("Please define destination directory.");
          }
        } else {
          throw new Error("Please define destination directory properly.");
        }
      }else{
        throw new Error("Please define destination directory properly 2.");
      }
    }
  }
  initSettings(){
    this.parser = cliparse.cli({
      name: "hexagon-cli",
      description: "hexagon command line interface.",
      commands: [
        cliparse.command(
          "init",
          {
            description: "Initialize new hexagon pod in current directory.",
            options: [],
            args: [
              cliparse.argument("destination", {
                description: "directory in which pod will be initiated."
              })
            ]
          },
          this.init.bind(this)
        ),
        cliparse.command(
          "build",
          {
            description: "Build current pod into single html page.",
            args: [],
            options: []
          },
          this.build.bind(this)
        ),
        cliparse.command(
          "add",
          {
            description: "Add record to current hexagon pod.",
            args: [
              cliparse.argument("title", { description: "new record's title." })
            ],
            options: []
          },
          this.add.bind(this)
        )
      ]
    });
  }
  constructor(next = () => {}) {
    this.initSettings();
    this.next = next;
  }
  parse(argv) {
    return cliparse.parse(this.parser, argv);
  }
}
export default Cli;

