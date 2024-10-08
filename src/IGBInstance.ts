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

"use strict";

export interface IGBInstance {
  botId: string;
  whoAmIVideo: string;
  botEndpoint: string;
  authenticatorTenant: string;
  authenticatorAuthorityHostUrl: string;
  cloudSubscriptionId: string;
  cloudUsername: string;
  cloudPassword: string;
  cloudLocation: string;
  instanceId: number;
  title: string;
  activationCode: string;
  description: string;
  version: string;
  enabledAdmin: boolean;
  engineName: string;
  marketplaceId: string;
  textAnalyticsKey: string;
  textAnalyticsEndpoint: string;
  marketplacePassword: string;
  webchatKey: string;
  googleBotKey: string;
  googleChatApiKey: string;
  googleChatSubscriptionName: string;
  googleClientEmail: string;
  googlePrivateKey: string;
  googleProjectId: string;
  whatsappServiceKey: string;
  whatsappBotKey: string;
  whatsappServiceNumber: string;
  whatsappServiceUrl: string;
  facebookWorkplaceVerifyToken: string;
  facebookWorkplaceAppSecret: string;
  facebookWorkplaceAccessToken: string;
  smsKey: string;
  smsSecret: string;
  smsServiceNumber: string;
  theme: string;
  ui: string;
  kb: string;
  nlpAppId: string;
  nlpKey: string;
  nlpEndpoint: string;
  nlpAuthoringKey: string;
  deploymentPaths: string;
  speechKey: string;
  speechEndpoint: string;
  spellcheckerKey: string;
  spellcheckerEndpoint: string;
  searchHost: string;
  searchKey: string;
  searchIndex: string;
  searchIndexer: string;
  searchScore: number;
  nlpScore: number;
  storageUsername: string;
  storagePassword: string;
  storageName: string;
  storageServer: string;
  storageDialect: string;
  storagePath: string;
  adminPass: string;
  translatorKey: string;
  translatorEndpoint: string;  
  params: string;
  state: string;

}
