const hanziToSaveBase = function(hanzi) {
   return  encodeURIComponent(hanzi).replace(/%/g, '-')
}

module.exports = {
    hanziToSaveBase
}