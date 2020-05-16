import Foundation
import Capacitor

import FirebaseCore
import FirebaseCrashlytics

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(FirebaseCrashlyticsPlugin)
public class FirebaseCrashlyticsPlugin: CAPPlugin {

    var fbase: FirebaseApp? = nil;

    public override func load() {
        if (FirebaseApp.app() == nil) {
            FirebaseApp.configure();
            fbase = FirebaseApp.app()
        }
    }
    
    @objc func setCustomValue(_ call: CAPPluginCall) {
        let keyId = call.getString("key") ?? ""
        let valueId = call.getString("value") ?? ""
        if keyId == "" || valueId == "" {
            call.error("You must pass key and value")
        }
        Crashlytics.crashlytics().setCustomValue(valueId, forKey: keyId)
        call.success()
    }
    
    @objc func setUserId(_ call: CAPPluginCall) {
        let id = call.getString("id") ?? ""
        if id == "" {
            call.error("You must pass userId")
        }
        Crashlytics.crashlytics().setUserID(id)
        call.success()
    }
}
