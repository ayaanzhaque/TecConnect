/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
export declare function getUA(): string;
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
export declare function isMobileCordova(): boolean;
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
export declare function isNode(): boolean;
/**
 * Detect Browser Environment
 */
export declare function isBrowser(): boolean;
export declare function isBrowserExtension(): boolean;
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
export declare function isReactNative(): boolean;
/** Detects Electron apps. */
export declare function isElectron(): boolean;
/** Detects Internet Explorer. */
export declare function isIE(): boolean;
/** Detects Universal Windows Platform apps. */
export declare function isUWP(): boolean;
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
export declare function isNodeSdk(): boolean;
