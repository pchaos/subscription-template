import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 100,
      name: '功能类 - XRiverActivity - 滑动浏览得肥料',
      desc:
        '在 XRiverActivity 页面检测到"滑动浏览"提示后，自动向上滑动 3 次（每次间隔 5 秒）以完成浏览任务。' +
        'WebView 内 visibleToUser 不可靠，故使用 matchRoot 从根节点匹配 + forcedTime 强制查询。',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      matchRoot: true,
      forcedTime: 30000,
      actionCd: 5000,
      actionMaximum: 3,
      resetMatch: 'activity',
      // 对应快照文件: assets/screenshots/支付宝_XRiverActivity-1777533718662.zip（滑动前，可见"滑动浏览15秒得肥料"）
      //                assets/screenshots/支付宝_XRiverActivity-1777534379767.zip（滑动完成后，"滑动浏览"文本消失，可见"已发放"）
      rules: [
        {
          key: 0,
          name: '检测滑动浏览提示 -> 执行上滑',
          matches: '[text*="滑动浏览"][text*="得肥料"]',
          action: 'swipe' as unknown as undefined,
          swipeArg: {
            startX: 540,
            startY: 1800,
            endX: 540,
            endY: 400,
            duration: 500,
          } as never,
        },
      ],
    } as never,
  ],
});
