import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 100,
      name: '功能类 - 种豆得豆 - 自动领取',
      desc: '在种豆得豆页面自动点击"收取好友"、"点击领取"、"限时 5 日礼包"按钮',
      activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
      actionCd: 10000,
      matchTime: 60000,
      actionMaximum: 10,
      rules: [
        {
          key: 0,
          name: '点击收取好友',
          matches:
            'TextView[text="收取好友"][clickable=false][visibleToUser=true] < View[clickable=true][visibleToUser=true]',
          exampleUrls: [
            'https://github.com/pchaos/subscription-template/raw/main/assets/screenshots/jd_babel_shouqu_1776834489966.png',
          ],
        },
        {
          key: 1,
          name: '点击领取',
          matches:
            'TextView[text="点击领取"][clickable=false][visibleToUser=true] < View[clickable=true][visibleToUser=true]',
          exampleUrls: [
            'https://github.com/pchaos/subscription-template/raw/main/assets/screenshots/jd_babel_dianji_1776834489966.png',
          ],
        },
        {
          key: 2,
          name: '限时 5 日礼包',
          matches:
            'TextView[text="限时 5 日礼包"][clickable=false][visibleToUser=true] < View[clickable=true][visibleToUser=true]',
          exampleUrls: [
            'https://github.com/pchaos/subscription-template/raw/main/assets/screenshots/jd_babel_xianri_1776834489966.png',
          ],
        },
        {
          key: 3,
          name: '点击限时京豆福利的领奖按钮',
          matches:
            'TextView[text="点击领奖"][clickable=false][visibleToUser=true] < View[clickable=true][visibleToUser=true]',
          exampleUrls: [
            'https://github.com/pchaos/subscription-template/raw/main/assets/screenshots/jd_babel_reward_1776671929278.png',
          ],
        },
        {
          key: 4,
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
      actionCd: 10000,
      matchTime: 60000,
      actionMaximum: 10,
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
          name: 'JD PLUS 点击立即开盒',
          matches:
            'TextView[text*="立即开盒"][clickable=false][visibleToUser=true] < View[clickable=true][visibleToUser=true]',
          exampleUrls: [
            'https://github.com/pchaos/subscription-template/raw/main/assets/screenshots/jd_mystery_box_2.png',
          ],
        },
      ],
    },
    {
      key: 102,
      name: '功能类 - 天天寻宝 - 自动点击',
      desc: '在天天寻宝页面自动点击"点我寻宝领取大奖"按钮',
      activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
      actionCd: 10000,
      matchTime: 60000,
      actionMaximum: 10,
      rules: [
        {
          key: 0,
          name: '点击点我寻宝领取大奖',
          matches:
            'TextView[text="点我寻宝领取大奖"][clickable=false][visibleToUser=true] < View[clickable=true][visibleToUser=true]',
          exampleUrls: [
            'https://github.com/pchaos/subscription-template/raw/main/assets/screenshots/jd_ttt_xunbao_1776834742061.png',
          ],
        },
        {
          key: 1,
          name: '点击宝藏即将出现',
          matches:
            'TextView[text*="宝藏即将出现"][clickable=false][visibleToUser=true] < View[clickable=true][visibleToUser=true]',
          exampleUrls: [
            'https://github.com/pchaos/subscription-template/raw/main/assets/screenshots/jd_ttt_xunbao_1776834742061.png',
          ],
        },
      ],
    },
  ],
});
