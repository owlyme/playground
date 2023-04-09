
/**
 * Module dependencies.
 */
import http from "http";
const codes = http.STATUS_CODES;

/**
 * Produce exports[STATUS] = CODE map.
 */

const map:{[key:string]: number} = {}
Object.keys(codes).forEach(function(code){
  var n = ~~code;
  var s = codes[n].toLowerCase();
  console.log(n, s)
  map[s] = n;
});

export default map

