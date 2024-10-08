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

import { BotAdapter, UserState } from "botbuilder";
import { DialogSet } from "botbuilder-dialogs";
import { IGBInstance } from ".";
import { IGBCoreService } from "./IGBCoreService";
import { IGBConversationalService, IGBPackage } from ".";
import { AzureText } from "pragmatismo-io-framework";
import { IGBAdminService } from "./IGBAdminService";
import { IGBDeployer } from "./IGBDeployer";
import { IGBKBService } from "./IGBKBService";

/** Minimal services for bot. */

export class GBMinInstance {
  packages: IGBPackage[];
  appPackages: IGBPackage[];
  botId: string;
  instance: IGBInstance;
  core: IGBCoreService;
  conversationalService: IGBConversationalService;
  kbService: IGBKBService;
  adminService: IGBAdminService;
  deployService: IGBDeployer;
  textServices: AzureText;
  bot: BotAdapter;
  dialogs: DialogSet;
  userState: UserState;
  userProfile: any;
  whatsAppDirectLine: any;


  cbMap: {};
  scriptMap: {};
  sandBoxMap: {};
  gbappServices: Array<any> = [];

  constructor() {
    this.packages = [];
    this.gbappServices = [];
  }
}
