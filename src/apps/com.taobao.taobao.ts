import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 100,
      name: '功能类 - 芭芭农场 - 领取肥料礼包',
      desc: '在芭芭农场做任务/施肥页面点击领取按钮。每天 7 点/12 点/20 点/22 点可领取',
      activityIds: ['com.taobao.themis.container.app.TMSActivity'],
      rules: [
        {
          key: 0,
          name: '点击去领取按钮',
          matches: '[text*="去领取"][clickable=true][visibleToUser=true]',
        },
        {
          key: 1,
          name: '点击立即领取按钮',
          matches: '[text="立即领取"][clickable=true][visibleToUser=true]',
        },
        {
          key: 2,
          name: '芭芭农场WebView交互',
          matches: '[desc*="芭芭"][clickable=true][visibleToUser=true]',
        },
        {
          key: 3,
          name: 'WebView内容区域',
          matches: '[desc*="farm"][clickable=true][visibleToUser=true]',
        },
        {
          key: 4,
          name: '点击去签到按钮',
          matches: '[text*="去签到"][clickable=true][visibleToUser=true]',
        },
        {
          key: 5,
          name: '点击知道了按钮',
          matches: '[text="知道了"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 101,
      name: '功能类 - 兔兔礼包',
      desc: '在兔兔农场页面点击领取按钮',
      activityIds: ['com.taobao.themis.container.app.TMSActivity'],
      actionCd: 10000,
      matchTime: 60000,
      actionMaximum: 10,
      rules: [
        {
          key: 0,
          name: '点击领取按钮',
          matches: '[text="领取"][clickable=true][visibleToUser=true]',
        },
        {
          key: 1,
          name: '点击兔兔挖肥料按钮',
          matches: '[text*="兔兔挖肥料"][clickable=true][visibleToUser=true]',
        },
        {
          key: 2,
          name: '"点击领取"按钮',
          matches: '[text*="点击领取"][clickable=true][visibleToUser=true]',
        },
        {
          key: 3,
          name: 'WebView内兔兔农场交互',
          matches: '[desc="兔兔农场"][clickable=true][visibleToUser=true]',
        },
        {
          key: 4,
          name: '交互区域点击',
          matches:
            '[clickable=true][visibleToUser=true][checkable=false][checked=false]',
        },
        {
          key: 5,
          name: 'WebView内兔兔领金币交互',
          // Snapshot-based WebView UI structure indicates Rabbit coin area is exposed via WebView with a descriptive label containing 兔兔领金币
          matches: '[desc*="兔兔领金币"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 102,
      name: '功能类 - 红包签到',
      desc: '在红包签到页面自动点击领取红包',
      activityIds: ['com.taobao.themis.container.app.TMSActivity'],
      rules: [
        {
          key: 0,
          name: '点击领取',
          matches: '[text="点击领取"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 103,
      name: '功能类 - 淘金币首页签到',
      desc: '在淘金币首页点击签到领金币按钮',
      activityIds: ['com.taobao.themis.container.app.TMSActivity'],
      rules: [
        {
          key: 0,
          name: '点击签到领金币',
          matches: '[text="签到领金币"] < [clickable=true][visibleToUser=true]',
        },
        {
          key: 1,
          name: '淘金币WebView交互',
          matches: '[desc*="淘金币"][clickable=true][visibleToUser=true]',
        },
        {
          key: 2,
          name: '通用可点击区域',
          matches: '[clickable=true][visibleToUser=true][checkable=false]',
        },
      ],
    },
    {
      key: 104,
      name: '功能类 - 浏览得奖励滑动任务',
      desc: '检测屏幕最上方"滑动浏览得肥料"提示，用于自动浏览任务场景',
      actionDelay: 5000,
      actionMaximum: 3,
      activityIds: ['com.taobao.themis.container.app.TMSActivity'],
      rules: [
        {
          key: 0,
          name: '检测滑动浏览得肥料',
          matches: '[text="滑动浏览得肥料"][visibleToUser=true]',
        },
      ],
    },
  ],
});
