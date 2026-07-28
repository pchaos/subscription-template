import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 1688888888,
  name: 'gkd Subscription patch',
  version: 1,
  author: 'p19992003',
  checkUpdateUrl: 'https://raw.githubusercontent.com/pchaos/subscription-template/main/dist/gkd.version.json5',
  supportUri: 'https://github.com/pchaos/subscription-template',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
