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
          action: 'swipe' as unknown as undefined,
          swipeArg: {
            startX: 540,
            startY: 1800,
            endX: 540,
            endY: 600,
            duration: 500,
          },
        } as never,
      ],
    },
  ],
});
