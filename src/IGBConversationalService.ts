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

import { GBMinInstance } from './GBMinInstance';
import { GBDialogStep } from './GBDialogStep';

export interface IGBConversationalService {
  prompt(min: GBMinInstance, step: GBDialogStep, text: string);
  sendText(min: GBMinInstance, step: GBDialogStep, text: string);
  sendEvent(min: GBMinInstance, step: GBDialogStep, name: string, value: Object);
  sendFile(min: GBMinInstance, step: GBDialogStep, mobile: string, url: string, caption: string);
  sendAudio(min: GBMinInstance, step: GBDialogStep, url: string);
  prompt(min: GBMinInstance, step: GBDialogStep, text: string);
  sendSms(min: GBMinInstance, mobile: string, text: string);
  routeNLP(step: GBDialogStep, min: GBMinInstance, text: string);
  getCurrentLanguage(step: GBDialogStep);
  getNewMobileCode();
  sendMarkdownToMobile(min: GBMinInstance, step: GBDialogStep, mobile: string, text: string);
  translate(min: GBMinInstance, text: string, language: string): Promise<string>;
  getLanguage(min: GBMinInstance, text: string): Promise<string>;
  spellCheck(min: GBMinInstance, text: string): Promise<string>;
}
