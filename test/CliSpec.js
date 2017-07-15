import { expect } from "chai";
import Cli from "../src/Cli";

describe("Cli", () => {
  describe("Cli.constructor()", () => {
    const cli = new Cli();

    it("should be and instance of `Object`.", () => {
      expect(cli).to.be.instanceOf(Object);
    });
    //it('', () => {
    //expect(false).to.be.true;
    //});
  });

  describe("Cli.initializePOD()", () => {
    it("should be able to handle `hexagon pod` initialization.", () => {
      expect(false).to.be.true;
    });
  });

  describe("Cli.build()", () => {
    it(
      "should be able to handle build an Single html page,        \
       containing all neccessary `hexagon pot` content to function.",
      () => {
        expect(false).to.be.true;
      }
    );
  });

  describe("Cli.add()", () => {
    it("should be able to handle addition of new content to `hexagon`.", () => {
      expect(false).to.be.true;
    });
  });
});

