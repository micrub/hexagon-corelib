import U from "./Utils";

class Model {
  valid = false;
  SCHEMA = {}

  constructor(schema) {
    if (typeof schema !== 'object') {
      throw new Error('Schema must be instance of `Object`.')
    } else {
      Object.keys(schema).map((key,index)=>{
        let type = schema[key];
        if (typeof type === 'string' && type.length) {
          console.log('z');
          this.SCHEMA = schema;
        }else{
throw new Error(
  "Passed schema type value should be a string [field, passedValue]: " +
    U.jstr([ key, type ])
);

        }
      })

    }
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
  validate(model) {
    let result = false;
    let sch = this.SCHEMA;
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
}

export default Model
