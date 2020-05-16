package jp.rdlabo.capacitor.plugin.firebase.crashlytics;

import com.getcapacitor.JSObject;
import org.json.JSONException;
import org.json.JSONObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import com.google.firebase.crashlytics.FirebaseCrashlytics;

@NativePlugin()
public class FirebaseCrashlyticsPlugin extends Plugin {

    private FirebaseCrashlytics firebaseCrashlytics;

    public void load() {
        firebaseCrashlytics = FirebaseCrashlytics.getInstance();
    }

    @PluginMethod()
    public void setCustomValue(PluginCall call) throws JSONException {
        try {
            String keyId = call.getString("key");
            String valueId = call.getString("value");
            firebaseCrashlytics.setCustomKey(keyId, valueId);
            call.success();
        } catch (Exception e) {
            call.reject(e.getLocalizedMessage(), e);
        }
    }

    @PluginMethod()
    public void setUserId(PluginCall call) throws JSONException {
        try {
            String id = call.getString("id");
            firebaseCrashlytics.setUserId(id);
            call.success();
        } catch (Exception e) {
            call.reject(e.getLocalizedMessage(), e);
        }
    }
}
