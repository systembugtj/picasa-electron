'use strict';

const queryString = require('querystring');
const fetch = require('node-fetch');
const objectAssign = require('object-assign');
const nodeUrl = require('url');
const electron = require('electron');
const log4js = require('log4js');
const BrowserWindow = electron.BrowserWindow || electron.remote.BrowserWindow;

const logger = log4js.getLogger("oauth2");
module.exports = function (config, windowParams) {
  function getAuthorizationCode(opts) {
    opts = opts || {};

    if (!config.redirectUri) {
      config.redirectUri = 'urn:ietf:wg:oauth:2.0:oob';
    }

    var urlParams = {
      response_type: 'code',
      redirect_uri: config.redirectUri,
      client_id: config.clientId
    };

    if (opts.scope) {
      urlParams.scope = opts.scope;
    }

    if (opts.accessType) {
      urlParams.access_type = opts.accessType;
    }

    var url = config.authorizationUrl + '?' + queryString.stringify(urlParams);

    return new Promise(function (resolve, reject) {
      const authWindow = new BrowserWindow(windowParams || {'use-content-size': true});

      logger.info(url);

      authWindow.loadURL(url);
      authWindow.show();

      authWindow.on('closed', () => {
        reject(new Error('window was closed by user'));
      });

      function onCallback(url) {
        var url_parts = nodeUrl.parse(url, true);
        var query = url_parts.query;
        var code = query.code;
        var error = query.error;

        if (error !== undefined) {
          reject(error);
          authWindow.removeAllListeners('closed');
          setImmediate(function () {
            authWindow.close();
          });
        } else if (code) {
          resolve(code);
          authWindow.removeAllListeners('closed');
          setImmediate(function () {
            authWindow.close();
          });
        }
      }

      authWindow.webContents.on('did-fail-load', (event, code, msg, url) => {
        logger.info(`'did-fail-load' to ${url}`);
        onCallback(url);
      });

      authWindow.webContents.on('did-navigate-in-page', (event, url) => {
        logger.info(`'did-navigate-in-page' to ${url}`);
        onCallback(url);
      });

      authWindow.webContents.on('will-navigate', (event, url) => {
        logger.info(`will-navigate to ${url}`);
        onCallback(url);
      });

      authWindow.webContents.on('did-navigate', (event, url) => {
        logger.info(`did-navigate to ${url}`);
        onCallback(url);
      });

      authWindow.webContents.on('did-redirect-navigation', (event, oldUrl, newUrl) => {
        logger.info(`newUrl will be open is ${newUrl}`);
        onCallback(newUrl);
      });
    });
  }

  function tokenRequest(data) {
    const header = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    if (config.useBasicAuthorizationHeader) {
      header.Authorization = 'Basic ' + new Buffer(config.clientId + ':' + config.clientSecret).toString('base64');
    } else {
      objectAssign(data, {
        client_id: config.clientId,
        client_secret: config.clientSecret
      });
    }

    return fetch(config.tokenUrl, {
      method: 'POST',
      headers: header,
      body: queryString.stringify(data)
    }).then(res => {
      return res.json();
    });
  }

  function getAccessToken(opts) {
    return getAuthorizationCode(opts)
      .then(authorizationCode => {
        var tokenRequestData = {
          code: authorizationCode,
          grant_type: 'authorization_code',
          redirect_uri: config.redirectUri,
          client_id: config.clientId,
          client_secret: config.clientSecret,
        };
        tokenRequestData = Object.assign(tokenRequestData, opts.additionalTokenRequestData);
        return tokenRequest(tokenRequestData);
      });
  }

  function refreshToken(refreshToken) {
    return tokenRequest({
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
      redirect_uri: config.redirectUri
    });
  }

  return {
    getAuthorizationCode: getAuthorizationCode,
    getAccessToken: getAccessToken,
    refreshToken: refreshToken
  };
};
