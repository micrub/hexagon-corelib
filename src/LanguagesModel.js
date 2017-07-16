import Utils from "./Utils";
import Model from "./Model";

class PostModel {
  //TODO behaviour TIMESTAMPABLE , probably need mixing or extension of class

  static SCHEMA = {
    title: "string",
    description: "string",
    content: "string",
    language: "string"
  };

  constructor() {
    throw new Error('z')
    super()
  }

  validate(model) {
    let result = false;
    let sch = PostModel.SCHEMA;
    let lamb = (schema, model) => {
      let validationResult = Object.keys(model).map((key, index) => {
        let propertyValue = model[key];
        let type = schema[key];
        return typeof propertyValue === type;
      });
      if (validationResult.length === 0) {
        validationResult = [ false, false ];
      }
      let validationSummary = validationResult.reduce((acc, value) => {
        return acc && value;
      });
      if (validationSummary) {
        return true;
      } else {
        return new Error(
          "Invalid input for SCHEMA " + JSON.stringify(schema) + " for input " +
            JSON.stringify(model)
        );
      }
    };
    return lamb(sch, model);
  }
  setModel(model) {
    if (typeof model !== "object") {
      throw new Errro("Passed model is not an `Object`.");
    }
    let isValid = this.validate(model);
    let ret = {};
    if (typeof isValid === "boolean" && isValid) {
      // return input model object
      this.valid = true;
      this.model = model;
      ret = model;
      ret.valid = true;
    } else {
      // return input model object
      this.valid = false;
      this.model = null;
      ret = isValid;
      ret.valid = false;
    }
    return ret;
  }
}

export default PostModel;

