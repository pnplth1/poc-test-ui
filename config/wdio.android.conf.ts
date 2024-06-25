import { join } from "path";
import config from "../config/wdio.shared.local.conf";

// ============
// Specs
// ============
config.specs = ["../test/specs/*.ts"];

// ============
// Capabilities
// ============
config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: "Android",
    maxInstances: 1,
    "appium:deviceName": "emulator-5554",
    "appium:platformVersion": "14.0",
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "UiAutomator2",
    // The path to the app
    "appium:app": join(process.cwd(), "./app/1.0.72-dev (100).apk"),
    // @ts-ignore
    // "appium:appWaitActivity": "com.wdiodemoapp.MainActivity",
    "appium:noReset": true,
    "appium:newCommandTimeout": 240,
  },
];

exports.config = config;
