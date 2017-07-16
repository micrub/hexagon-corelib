import Utils from '../src/Utils'

class PostModel {
  //TODO behaviour TIMESTAMPABLE
  static SCHEMA = {
    title : String,
    description : String,
    content: String
  }
  constructor() {
  }
  validate(model){
    let result = false;
    let sch = PostModel.SCHEMA;
    let lamb = (schema, model) => {
      //console.log(schema, model, 'Z');
    }
    return lamb(sch, model)
  }
  setModel(model){
    if (typeof model !== 'object') {
      throw new Errro('Passed model is not an `Object`.')
    }
    let invalidResult = this.validate(PostModel.SCHEMA, model)
    if (invalidResult) {
      throw new Error(invalidResult)
    }else {
      this.model = model;
      return model;
    }
  }
}

export default PostModel
