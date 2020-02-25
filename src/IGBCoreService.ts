/*****************************************************************************\
|                                               ( )_  _                       |
|    _ _    _ __   _ _    __    ___ ___     _ _ | ,_)(_)  ___   ___     _     |
|   ( '_`\ ( '__)/'_` ) /'_ `\/' _ ` _ `\ /'_` )| |  | |/',__)/' _ `\ /'_`\   |
|   | (_) )| |  ( (_| |( (_) || ( ) ( ) |( (_| || |_ | |\__, \| (˅) |( (_) )  |
|   | ,__/'(_)  `\__,_)`\__  |(_) (_) (_)`\__,_)`\__)(_)(____/(_) (_)`\___/'  |
|   | |                ( )_) |                                                |
|   (_)                 \___/'                                                |
|                                                                             |
| General Bots Copyright (c) Pragmatismo.io. All rights reserved.             |
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
| "General Bots" is a registered trademark of Pragmatismo.io.                 |
| The licensing of the program under the AGPLv3 does not imply a              |
| trademark license. Therefore any rights, title and interest in              |
| our trademarks remain entirely with us.                                     |
|                                                                             |
\*****************************************************************************/

"use strict"

import { Sequelize } from "sequelize-typescript"
import { IGBInstance } from "./IGBInstance"
import { IGBInstallationDeployer } from "./IGBInstallationDeployer";

/**
 * This interface defines the core service which is shared among
 * bot packages so they can have direct access to base services.
 */
export interface IGBCoreService {
    sequelize: Sequelize
    syncDatabaseStructure()
    loadInstances(): Promise<IGBInstance[]>;
    deleteInstance(botId: string): Promise<void>;
    loadInstance(botId: string): Promise<IGBInstance>;
    loadInstanceById(instanceId: number): Promise<IGBInstance>;
    initStorage(): Promise<any>;
    createBootInstance(core: IGBCoreService, installationDeployer: IGBInstallationDeployer, proxyAddress: string);
    ensureAdminIsSecured();
    loadSysPackages(core: IGBCoreService);
    ensureProxy(port): Promise<string>;
    ensureInstances(instances: IGBInstance[], bootInstance: any, core: IGBCoreService);
    checkStorage(azureDeployer: IGBInstallationDeployer);
    saveInstance(fullInstance: any);
    loadAllInstances(core: IGBCoreService, azureDeployer: IGBInstallationDeployer, proxyAddress: string);
    openBrowserInDevelopment();
    installWebHook(isGet: boolean, url: string, callback: any);
    setWWWRoot(localPath: string);
    setEntryPointDialog(dialogName: string);
}