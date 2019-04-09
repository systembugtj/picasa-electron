import Controller from "@ember/controller"
import { action, computed } from "@ember-decorators/object";
import { inject } from '@ember-decorators/service';
import I18nMixin from 'ember-i18next/mixins/i18n';
import { isMacOSX } from "picasa/utils/platform";
import EventNames from "picasa/constants/event-name";


const _domain = "https://gotripasa.azurewebsites.net";
const _clientId = "tripasa-app";
const _clientSecret = "388D45FA-B36B-4988-BA59-B187D329C207";
const _redirectUri = "https://tripasa/callback";
const TokenUri = `${_domain}/connect/token`;
const AuthorizeUri = `${_domain}/connect/authorize`;


const config = {
  clientId: _clientId,
  clientSecret: _clientSecret,
  authorizationUrl: AuthorizeUri,
  tokenUrl: TokenUri,
  useBasicAuthorizationHeader: false,
  redirectUri: _redirectUri, //'http://localhost'
};
const options = {
};

export default class TripController extends Controller.extend(I18nMixin) {
  @inject electronApi;
  @inject persistence;

  isLogin = false;

  @computed
  get macosxStyle() {
    return isMacOSX() ? "macosx" : "";
  }

  get dialog() {
    return this.electronApi.dialog;
  }

  init() {
    super.init(...arguments)

    this.persistence.on(EventNames.AccessTokenReady, () => {
      this.set("isLogin", true);
    })
  }

  @action
  handleLogin() {
    this.electronApi.send("tripasa-login-request", {
      config,
      options
    });
  }
}
