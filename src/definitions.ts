declare module "@capacitor/core" {
  interface PluginRegistry {
    FirebaseCrashlyticsPlugin: FirebaseCrashlyticsPluginInterface;
  }
}

export interface FirebaseCrashlyticsPluginInterface {
  setCustomValue(options: { key: string; value: string | number }): Promise<void>;
  setUserId(options: { id: string }): Promise<void>;
}
