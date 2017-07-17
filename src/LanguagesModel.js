import U from "./Utils";
import Model from "./Model";
import List from "list-of-programming-languages";

class LanguagesModel extends Model {

  static LIST = []

  static SCHEMA = {
    name: "string",
    hash: "string"
  };

  constructor() {

    super(LanguagesModel.SCHEMA)

    let model = List.itemListElement.map((v,k) => {
      let name = v.item.name;
      return {name : name, hash : U.hash(name)}
    })

    this.setModel(model)

    console.log(this.model);
  }

}

export default LanguagesModel;

