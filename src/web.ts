import { WebPlugin } from '@capacitor/core';
import { FirebaseCrashlyticsPluginPlugin } from './definitions';

export class FirebaseCrashlyticsPluginWeb extends WebPlugin implements FirebaseCrashlyticsPluginPlugin {
  constructor() {
    super({
      name: 'FirebaseCrashlyticsPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const FirebaseCrashlyticsPlugin = new FirebaseCrashlyticsPluginWeb();

export { FirebaseCrashlyticsPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(FirebaseCrashlyticsPlugin);
