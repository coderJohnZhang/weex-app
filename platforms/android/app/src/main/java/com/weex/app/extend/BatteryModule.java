package com.weex.app.extend;

import android.content.Context;
import android.os.BatteryManager;
import android.util.Log;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.weex.app.WXApplication;

/**
 * Created by ZhangJun on 2018/9/19.
 */
public class BatteryModule extends WXModule {

    private static final String TAG = BatteryModule.class.getSimpleName();

    /**
     * run ui thread, 异步callback返回
     * @param callback
     */
    @JSMethod(uiThread = true)
    public void getBatteryLevel(JSCallback callback) {
        BatteryManager batteryManager = (BatteryManager) WXApplication.getInstance()
                .getSystemService(Context.BATTERY_SERVICE);
        int batteryLevel = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY);
        Log.d(TAG, "getBatteryLevel: batteryLevel = " + batteryLevel);
        callback.invoke(batteryLevel);
    }

    /**
     * 同步返回
     * @return
     */
    @JSMethod(uiThread = false)
    public int getBatteryLevel2() {
        BatteryManager batteryManager = (BatteryManager) WXApplication.getInstance()
                .getSystemService(Context.BATTERY_SERVICE);
        int batteryLevel = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY);
        Log.d(TAG, "getBatteryLevel2: batteryLevel = " + batteryLevel);
        return batteryLevel;
    }
}
