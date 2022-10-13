/* eslint valid-jsdoc: "off" */
'use strict';
const path = require('path')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1646062364645_7390';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    multipart : {
      mode: 'file',
      tmpdir: path.join(process.cwd(), 'app/public/uploadfiles'),

    },
  
    security: {
      xframe: {
        enable: false,
      },
   
      csrf: {
        enable: false,
        type: 'ctoken',
        ignoreJSON: false,
        useSession: false,
        cookieName: 'csrfToken',
        sessionName: 'csrfToken',
        headerName: 'x-csrf-token',
        bodyName: '_csrf',
        queryName: '_csrf',
        refererWhiteList: [],
      },


      domainWhiteList: ["*"]
    },

    cors: {
      origin: "*",
      allowMethods: "GET, POST, HEAD, OPTIONS"
    },
    
  };

 

  return {
    ...config,
    ...userConfig
  };
};
