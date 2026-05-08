import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '功能类 - 上滑继续观看短剧',
      desc: '上滑继续观看短剧',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionCd: 5000,
      rules: [
        {
          key: 0,
          matches: '[text*="上滑继续观看"]',
          action: 'swipe',
          swipeArg: {
            start: { x: 540, y: 1800 },
            end: { x: 540, y: 600 },
            duration: 500,
          },
        },
      ],
    },
  ],
});
