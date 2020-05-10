declare module "@capacitor/core" {
  interface PluginRegistry {
    FirebaseCrashlyticsPlugin: FirebaseCrashlyticsPluginPlugin;
  }
}

export interface FirebaseCrashlyticsPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
