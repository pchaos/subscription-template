import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 100,
      name: '功能类 - 种豆得豆 - 限时京豆福利',
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
        {
          key: 1,
          name: '点击明天继续领奖',
          matches:
            'TextView[text="明天继续领奖"][clickable=false][visibleToUser=true] < View[clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 101,
      name: '功能类 - 签到开盲盒',
      desc: '在签到开盲盒页面自动点击"一键领取"和"立即开盒"按钮',
      activityIds: ['com.jd.lib.web.activity.WebActivity'],
      rules: [
        {
          key: 0,
          name: '点击一键领取',
          matches:
            'TextView[text="一键领取"][clickable=false][visibleToUser=true] < View[clickable=true][visibleToUser=true]',
          exampleUrls: [
            'https://github.com/pchaos/subscription-template/raw/main/assets/screenshots/jd_mystery_box_1776698872459.png',
          ],
        },
        {
          key: 1,
          name: '点击立即开盒',
          matches:
            'TextView[text="立即开盒"][clickable=false][visibleToUser=true] < View[clickable=true][visibleToUser=true]',
          exampleUrls: [
            'https://github.com/pchaos/subscription-template/raw/main/assets/screenshots/jd_mystery_box_2.png',
          ],
        },
      ],
    },
  ],
});
