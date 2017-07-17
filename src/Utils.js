import crypto from 'crypto'

let Utils  = {

  jstr : JSON.stringify,

  hash : (string, htype = "md5", dg = "hex") => {
    return crypto.createHash(htype).update(string).digest(dg)
  },

  lastFnk : () => {}

}

export default Utils
