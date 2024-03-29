import { async } from "regenerator-runtime";
import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };


//  Function For JSON
export const getJSON = async function(url){
    try {
        const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
        const data = await res.json();
        
        if(!res.ok) throw new Error(`${data.message} (${res.status})`)
        // console.log(data);
        return data;
    } catch(err){
       throw err;
    }
}