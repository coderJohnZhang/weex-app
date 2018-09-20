package com.weex.app;

import android.app.Application;

import com.taobao.weex.WXEnvironment;
import com.weex.app.extend.BatteryModule;
import com.weex.app.extend.ImageAdapter;
import com.weex.app.extend.WXEventModule;
import com.alibaba.weex.plugin.loader.WeexPluginContainer;
import com.weex.app.util.AppConfig;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

public class WXApplication extends Application {

    private static WXApplication instance;

    @Override
    public void onCreate() {
        super.onCreate();
        instance = this;
        //initDebugEnvironment(true, "127.0.0.1");
        WXSDKEngine.addCustomOptions("appName", "WXSample");
        WXSDKEngine.addCustomOptions("appGroup", "WXApp");
        WXSDKEngine.initialize(this,
                new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build()
        );
        try {
            WXSDKEngine.registerModule("event", WXEventModule.class);
            WXSDKEngine.registerModule("batteryModule", BatteryModule.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
        AppConfig.init(this);
        WeexPluginContainer.loadAll(this);
    }

    public static WXApplication getInstance() {
        return instance;
    }

    private void initDebugEnvironment(boolean enable, String host) {
        WXEnvironment.sRemoteDebugMode = enable;
        WXEnvironment.sRemoteDebugProxyUrl = "ws://" + host + ":8088/debugProxy/native";
    }
}
