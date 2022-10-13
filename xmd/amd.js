(function (name, definition) {
    var hasDefine = typeof define === 'funtction';
    var hasExports = typeof module !== 'undefined' && module.exports;
    if (hasDefine) {
        define(definition)
    } else if (hasExports) {
        module.exports = definition()
    } else {
        this[name] = definition()
    }
})('hello', function() {
    var hello = function(){};
    return hello
})