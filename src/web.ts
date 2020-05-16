import { WebPlugin } from '@capacitor/core';
import { FirebaseCrashlyticsPluginInterface } from './definitions';

export class FirebaseCrashlyticsPluginWeb extends WebPlugin implements FirebaseCrashlyticsPluginInterface {
  _options: any;
  constructor() {
    super({
      name: 'FirebaseCrashlyticsPlugin',
      platforms: ['web']
    });
  }

  async setCustomValue(options: { key: string; value: string }): Promise<void> {
    this._options = options;
  }

  async setUserId(options: { id: string }): Promise<void> {
    this._options = options;
  }
}

const FirebaseCrashlyticsPlugin = new FirebaseCrashlyticsPluginWeb();

export { FirebaseCrashlyticsPluginInterface };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(FirebaseCrashlyticsPlugin);
