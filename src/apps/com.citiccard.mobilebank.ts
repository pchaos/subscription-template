import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.citiccard.mobilebank',
  name: '动卡空间',
  groups: [
    {
      key: 0,
      name: '功能类 - 中信碳账户 - 绿色支付',
      desc: '在中信碳账户页面自动点击绿色能量球（绿色支付）。根据快照分析，有效绿色支付卡片特征为：含有绿色圆形图标 + text="绿色支付" + 包含"失效"文本（如"09:35:10失效"或"1天后失效"）。已过期的显示"过期能量"+"点击复活"，跳过不处理。',
      activityIds: ['com.citiccard.mobilebank.web.webpage.CommonWebPage'],
      rules: [
        {
          key: 0,
          name: '点击绿色支付卡片',
          matches: '[text="绿色支付"][visibleToUser=true]',
        },
      ],
    },
  ],
});
