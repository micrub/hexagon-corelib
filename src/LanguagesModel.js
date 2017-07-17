import U from "./Utils";
import Model from "./Model";
import List from "list-of-programming-languages";

const L = List.itemListElement;

class LanguagesModel extends Model {

  static LIST = L;

  static SCHEMA = {
    name: "string",
    hash: "string"
  };

  constructor() {

    super(LanguagesModel.SCHEMA)

    let model = LanguagesModel.LIST.map((v,k) => {
      let name = v.item.name;
      return {name : name, hash : U.hash(name)}
    })

  }
  validate(){
    //TODO
  }

}

export default LanguagesModel;

