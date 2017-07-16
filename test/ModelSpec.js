import { expect } from "chai";
import Model from "../src/Model";
import PostModel from "../src/PostModel";

describe("Model", () => {

  describe("Model.constructor()", () => {
    let base;

    it("should throw if not passed map of string, that representing model's map of model properties and their types.", () => {
      try {
        base = new Model({});
      } catch (e) {
        /* handle error */
        expect(e).to.be.instanceof(Object);
      }
    });

    it("should be and instance of `object`", () => {
      expect(base).to.be.instanceof(Object);
    });

    it("should have `setModel` function.", () => {
      expect(base.setModel).to.be.instanceof(Function);
    });

    it("should throw if passed is not an `Object`", () => {
      try {
        base.setModel();
      } catch (e) {
        expect(e).to.be.not.null;
      }
      try {
        base.setModel([ 1, 2, 3 ]);
      } catch (e) {
        expect(e).to.be.not.null;
      }
      try {
        base.setModel("");
      } catch (e) {
        expect(e).to.be.not.null;
      }
      try {
        base.setModel(null);
      } catch (e) {
        expect(e).to.be.not.null;
      }
    });

    it("should throw if passed obejct to `setModel` is not VALID.", () => {
      try {
        base.setModel({});
      } catch (e) {
        console.log(e);
        /* handle error */
        expect(e).to.be.not.null;
      }
    });

    it("should throw if one of passed schema's properties is not a `string`.", () => {
      let cloned = { ... PostModel.SCHEMA  }
      cloned.title = [];
      try {
        new Model(cloned);
      } catch (e) {
        /* handle error */
        expect(e).to.be.not.null;
      }
    });

    it("should throw if one of passed schema's properties is empty string.", () => {
      let cloned = { ... PostModel.SCHEMA  }
      cloned.title = "";
      try {
        new Model(cloned);
      } catch (e) {
        /* handle error */
        expect(e).to.be.not.null;
      }
    });

    it("should throw if one of passed schema's properties is not in `Model.ALLOWED_TYPES`.", () => {
      let cloned = { ... PostModel.SCHEMA  }
      cloned.title = "array";
      try {
        new Model(cloned);
      } catch (e) {
        /* handle error */
        expect(e).to.be.not.null;
      }
    });

    it("should return model object if payload of `setModel` is VALID.", () => {
      base = new Model(PostModel.SCHEMA);
      let validModel = {
        title       : " Post title ",
        description : " Post description ",
        content     : "<script>alert('hexagon cross site scripting bug');</script>",
        language    : 'javascript'
      };
      let model = base.setModel(validModel);
      expect(model).to.be.instanceOf(Object);
      expect(model.valid).to.be.true;
    });
  });
});

