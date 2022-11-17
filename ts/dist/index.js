"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Base_pribool;
class Base {
    constructor() {
        this.ispub = 0;
        this.ispro = true;
        this.pri = true;
        _Base_pribool.set(this, false);
        __classPrivateFieldGet(this, _Base_pribool, "f");
    }
}
_Base_pribool = new WeakMap();
class Sub extends Base {
    getpro() {
        this.ispub;
        this.ispro;
    }
}
const instance = new Sub();
instance.ispub;
