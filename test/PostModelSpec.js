import { expect } from "chai";
import PostModel from "../src/PostModel";

describe("PostModel", () => {

  describe("PostModel.static", () => {
    it("should have SCHEMA object property.", () => {
      expect(PostModel.SCHEMA).to.be.instanceof(Object);
    });
  });

  describe("PostModel.constructor()", () => {
    const base = new PostModel();

    it("should be and instance of `object`", () => {
      expect(base).to.be.instanceof(Object);
    });

    it("should return model object if payload of `setModel` is VALID.", () => {
      const base = new PostModel();
      let validPostModel = {
        title       : " Post title ",
        description : " Post description ",
        content     : "<script>alert('hexagon cross site scripting bug');</script>",
        language    : 'javascript'
      };
      let model = base.setModel(validPostModel);
      expect(model).to.be.instanceOf(Object);
      expect(model.valid).to.be.true;
    });

  });

});

