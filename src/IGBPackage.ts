/*****************************************************************************\
|  █████  █████ ██    █ █████ █████   ████  ██      ████   █████ █████  ███ ® |
| ██      █     ███   █ █     ██  ██ ██  ██ ██      ██  █ ██   ██  █   █      |
| ██  ███ ████  █ ██  █ ████  █████  ██████ ██      ████   █   █   █    ██    |
| ██   ██ █     █  ██ █ █     ██  ██ ██  ██ ██      ██  █ ██   ██  █      █   |
|  █████  █████ █   ███ █████ ██  ██ ██  ██ █████   ████   █████   █   ███    |
|                                                                             |
| General Bots Copyright (c) pragmatismo.cloud. All rights reserved.          |
| Licensed under the AGPL-3.0.                                                |
|                                                                             |
| According to our dual licensing model, this program can be used either      |
| under the terms of the GNU Affero General Public License, version 3,        |
| or under a proprietary license.                                             |
|                                                                             |
| The texts of the GNU Affero General Public License with an additional       |
| permission and of our proprietary license can be found at and               |
| in the LICENSE file you have received along with this program.              |
|                                                                             |
| This program is distributed in the hope that it will be useful,             |
| but WITHOUT ANY WARRANTY, without even the implied warranty of              |
| MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                |
| GNU Affero General Public License for more details.                         |
|                                                                             |
| "General Bots" is a registered trademark of pragmatismo.cloud.              |
| The licensing of the program under the AGPLv3 does not imply a              |
| trademark license. Therefore any rights, title and interest in              |
| our trademarks remain entirely with us.                                     |
|                                                                             |
\*****************************************************************************/

'use strict';

import { IGBCoreService } from './IGBCoreService'
import { Sequelize } from 'sequelize-typescript'
import { GBMinInstance } from '.'
import { GBDialogStep } from './GBDialogStep';

export interface IGBPackage{

    /** 
     * Each app has its own set of sys packages. 
     */
    sysPackages: IGBPackage[]

    /** 
     * Called when a package is being loaded, once per server or at demand. 
     */
    loadPackage(core: IGBCoreService, sequelize: Sequelize): Promise<void>

    /** 
     * Called when a package needs to be unloaded. 
     */
    unloadPackage(core: IGBCoreService): Promise<void>

   /** 
     * Called when a new bot instance is loaded. 
     */
    getDialogs(min: GBMinInstance)

    /** 
     * Called when a new bot instance is loaded. 
     */
    loadBot(min: GBMinInstance): Promise<void>

    /** 
     * Called whenever a bot instance needs to be shutdown.
     */
    unloadBot(min: GBMinInstance): Promise<void>

    /**
     * Called in each new session. 
     */
    onNewSession(min: GBMinInstance, step: GBDialogStep): Promise<void>

    /**
     * Exchange data between BotServer and .gbapp/.gblib
     * @param kind 'newMessage', 'getBroadcast', 'getKeywords'
     * @param data 
     */
    onExchangeData (min: GBMinInstance, kind: string, data: any);

}