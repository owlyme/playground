const path = require('path')


module.exports = {
    entry: './src/index.js',
    output: {
       path: path.resolve(__dirname, './dist'),
       filename: 'umd.js',
    //    libraryTarget: {
    //         libraryTarget: 'umd',
    //         name: "umd"
    //    }
    // globalObject: 'this',

    library: {
        name: 'AnotherLibrary',
        type: 'umd',
      },




    },

}