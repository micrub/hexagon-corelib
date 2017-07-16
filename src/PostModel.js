import Utils from "./Utils";
import Model from "./Model";

class PostModel extends Model {
  //TODO behaviour TIMESTAMPABLE , probably need mixing or extension of class

  static SCHEMA = {
    title: "string",
    description: "string",
    content: "string",
    language: "string"
  };

  constructor() {
    super(PostModel.SCHEMA)
  }

}

export default PostModel;

