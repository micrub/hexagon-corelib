import { expect } from "chai";
import Cli from "../src/Cli";

describe("Cli", () => {
  //let cli = new Cli();

  //describe("Cli.constructor()", () => {
    //it("should be and instance of `Object`.", () => {
      //expect(cli).to.be.instanceOf(Object);
    //});
  //});

  describe("cli.parse()", () => {
    it("should return parsed as instance of Object.", () => {
      let next = (err, result) => {
        expect(result).to.be.instanceOf(Object)
      }
      let cli = new Cli(next);
      let argv = ['','init', '/home/michaelr/ttt']
      let result = cli.parse(argv);
    });
  });

  //describe("Cli.initializePOD()", () => {
    //it("should be able to handle `hexagon pod` initialization.", () => {
      //expect(false).to.be.true;
    //});
  //});

  //describe("Cli.build()", () => {
    //it(
      //"should be able to handle build an Single html page,        \
       //containing all neccessary `hexagon pot` content to function.",
      //() => {
        //expect(false).to.be.true;
      //}
    //);
  //});

  //describe("Cli.add()", () => {
    //it("should be able to handle addition of new content to `hexagon`.", () => {
      //expect(false).to.be.true;
    //});
  //});
});

