import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '功能类 - 淘宝芭芭农场 - 滑动翻页',
    desc: '在淘宝芭芭农场任务列表页面执行上滑操作，将屏幕外的按钮滑入可视区域',
    order: 10,
    actionMaximum: 8,
    matchTime: 120000,
    actionDelay: 4000,
    apps: [
      {
        id: 'com.taobao.taobao',
        activityIds: ['com.taobao.themis.container.app.TMSActivity'],
      },
    ],
    rules: [
      {
        key: 0,
        name: '锚点1: 检测列表底部并上滑（看直播领红包）',
        matches: '[text="看直播领每日提现红包(0/1)"][visibleToUser=true]',
        action: 'swipe' as unknown as undefined,
        swipeArg: {
          startX: 540,
          startY: 2000,
          endX: 540,
          endY: 800,
          duration: 500,
        },
      } as never,
      {
        key: 1,
        name: '锚点2: 检测列表底部并上滑（去百度极速版）',
        matches: '[text="去百度极速版领现金(0/1)"][visibleToUser=true]',
        action: 'swipe' as unknown as undefined,
        swipeArg: {
          startX: 540,
          startY: 2000,
          endX: 540,
          endY: 800,
          duration: 500,
        },
      } as never,
      {
        key: 2,
        name: '锚点3: 检测列表底部并上滑（下次一定）',
        matches: '[text="下次一定"][visibleToUser=true]',
        action: 'swipe' as unknown as undefined,
        swipeArg: {
          startX: 540,
          startY: 2000,
          endX: 540,
          endY: 800,
          duration: 500,
        },
      } as never,
      {
        key: 3,
        name: '锚点4: 检测领肥料礼包文本并上滑',
        matches: '[text="领肥料礼包(0/1)"][visibleToUser=true]',
        action: 'swipe' as unknown as undefined,
        swipeArg: {
          startX: 540,
          startY: 2000,
          endX: 540,
          endY: 800,
          duration: 500,
        },
      } as never,
    ],
  } as never,
]);
