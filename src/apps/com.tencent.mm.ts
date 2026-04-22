import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '功能类 - 视频广告完成后关闭',
      desc: '微信朋友圈视频广告播放完成后自动关闭',
      fastQuery: true,
      matchTime: 40000, // 40 秒：等待 30 秒广告播放 + 10 秒缓冲
      actionMaximum: 1,
      resetMatch: 'app',
      actionCd: 3000, // 全局默认冷却时间 3 秒
      rules: [
        {
          key: 0,
          matches:
            '[desc="视频播放器"] <<n FrameLayout >n [text="已获得奖励"] <<n FrameLayout >n [text="关闭"]',
          // 原快照 URL (已移除，因 GKD 校验不通过):
          // - https://raw.githubusercontent.com/pchaos/subscription-template/main/assets/screenshots/com.tencent.mm/1776825889636.png
          // snapshotUrls 和 exampleUrls 用于示例展示，可以省略
          // 实际使用时 GKD 会使用本地快照进行验证
        },
      ],
    },
    {
      key: 2,
      name: '功能类 - 视频广告播放中静音',
      desc: '微信朋友圈视频广告播放时自动静音',
      fastQuery: true,
      matchTime: 5000, // 5 秒：只在广告刚开始时触发一次
      actionMaximum: 1,
      resetMatch: 'app',
      actionCd: 60000, // 60 秒冷却：避免重复触发
      rules: [
        {
          key: 0,
          matches:
            '[desc="视频播放器"] <<n FrameLayout >n [text*="秒后可获得奖励"] <<n FrameLayout >n ImageView[left=815][top=150][right=875][bottom=210]',
          // 原快照 URL (已移除，因 GKD 校验不通过):
          // - https://raw.githubusercontent.com/pchaos/subscription-template/main/assets/screenshots/com.tencent.mm/1776825662026.png
          // - https://raw.githubusercontent.com/pchaos/subscription-template/main/assets/screenshots/com.tencent.mm/1776830284145.png
          // snapshotUrls 和 exampleUrls 用于示例展示，可以省略
        },
      ],
    },
  ],
});
