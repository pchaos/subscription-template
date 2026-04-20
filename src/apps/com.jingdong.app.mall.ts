import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 100,
      name: '功能 - 种豆得豆 - 限时京豆福利',
      desc: '在种豆得豆页面自动点击"点击领奖"按钮领取限时京豆福利',
      activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
      rules: [
        {
          key: 0,
          name: '点击限时京豆福利的领奖按钮',
          matches:
            'TextView[text="点击领奖"][clickable=false][visibleToUser=true] < View[clickable=true][visibleToUser=true]',
          exampleUrls: [
            'https://github.com/pchaos/subscription-template/raw/main/assets/screenshots/jd_babel_reward_1776671929278.png',
          ],
        },
      ],
    },
  ],
});
