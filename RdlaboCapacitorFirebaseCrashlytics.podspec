
  Pod::Spec.new do |s|
    s.name = 'RdlaboCapacitorFirebaseCrashlytics'
    s.version = '0.0.1'
    s.summary = 'capacitor plugin for using firebase crashlytics'
    s.license = 'MIT'
    s.homepage = 'git@github.com:rdlabo-team/capacitor-firebase-crashlytics.git'
    s.author = 'Masahiko Sakakibara'
    s.source = { :git => 'git@github.com:rdlabo-team/capacitor-firebase-crashlytics.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end