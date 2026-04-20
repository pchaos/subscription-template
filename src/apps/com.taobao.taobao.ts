import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 100,
      name: '芭芭农场-领取肥料礼包',
      desc: '在芭芭农场做任务/施肥页面点击[去领取]按钮领取肥料礼包。每天7点/12点/20点/22点可领取',
      activityIds: [
        'com.taobao.themis.container.app.TMSActivity',
        'com.taobao.farm.activity.FarmActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击去领取按钮',
          matches: '[text="去领取"][clickable=true][visibleToUser=true]',
        },
        {
          key: 1,
          name: '点击立即领取按钮',
          matches: '[text="立即领取"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});