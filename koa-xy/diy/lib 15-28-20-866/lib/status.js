"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const http_1 = __importDefault(require("http"));
const codes = http_1.default.STATUS_CODES;
/**
 * Produce exports[STATUS] = CODE map.
 */
const map = {};
Object.keys(codes).forEach(function (code) {
    var n = ~~code;
    var s = codes[n].toLowerCase();
    console.log(n, s);
    map[s] = n;
});
exports.default = map;
