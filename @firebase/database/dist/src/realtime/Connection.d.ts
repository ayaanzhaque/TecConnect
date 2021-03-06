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
import { RepoInfo } from '../core/RepoInfo';
/**
 * Creates a new real-time connection to the server using whichever method works
 * best in the current browser.
 *
 * @constructor
 */
export declare class Connection {
    id: string;
    private repoInfo_;
    private onMessage_;
    private onReady_;
    private onDisconnect_;
    private onKill_;
    lastSessionId?: string;
    connectionCount: number;
    pendingDataMessages: unknown[];
    sessionId: string;
    private conn_;
    private healthyTimeout_;
    private isHealthy_;
    private log_;
    private primaryResponsesRequired_;
    private rx_;
    private secondaryConn_;
    private secondaryResponsesRequired_;
    private state_;
    private transportManager_;
    private tx_;
    /**
     * @param {!string} id - an id for this connection
     * @param {!RepoInfo} repoInfo_ - the info for the endpoint to connect to
     * @param {function(Object)} onMessage_ - the callback to be triggered when a server-push message arrives
     * @param {function(number, string)} onReady_ - the callback to be triggered when this connection is ready to send messages.
     * @param {function()} onDisconnect_ - the callback to be triggered when a connection was lost
     * @param {function(string)} onKill_ - the callback to be triggered when this connection has permanently shut down.
     * @param {string=} lastSessionId - last session id in persistent connection. is used to clean up old session in real-time server
     */
    constructor(id: string, repoInfo_: RepoInfo, onMessage_: (a: {}) => void, onReady_: (a: number, b: string) => void, onDisconnect_: () => void, onKill_: (a: string) => void, lastSessionId?: string);
    /**
     * Starts a connection attempt
     * @private
     */
    private start_;
    /**
     * @return {!string}
     * @private
     */
    private nextTransportId_;
    private disconnReceiver_;
    private connReceiver_;
    /**
     *
     * @param {Object} dataMsg An arbitrary data message to be sent to the server
     */
    sendRequest(dataMsg: object): void;
    tryCleanupConnection(): void;
    private onSecondaryControl_;
    private onSecondaryMessageReceived_;
    private upgradeIfSecondaryHealthy_;
    private proceedWithUpgrade_;
    private onPrimaryMessageReceived_;
    private onDataMessage_;
    private onPrimaryResponse_;
    private onControl_;
    /**
     *
     * @param {Object} handshake The handshake data returned from the server
     * @private
     */
    private onHandshake_;
    private tryStartUpgrade_;
    private startUpgrade_;
    private onReset_;
    private onConnectionEstablished_;
    private sendPingOnPrimaryIfNecessary_;
    private onSecondaryConnectionLost_;
    /**
     *
     * @param {boolean} everConnected Whether or not the connection ever reached a server. Used to determine if
     * we should flush the host cache
     * @private
     */
    private onConnectionLost_;
    /**
     *
     * @param {string} reason
     * @private
     */
    private onConnectionShutdown_;
    private sendData_;
    /**
     * Cleans up this connection, calling the appropriate callbacks
     */
    close(): void;
    /**
     *
     * @private
     */
    private closeConnections_;
}
