/**
 * Created by zhangran on 17/3/17.
 */

export default [
  {
    title: '预约管理',
    link: '/order',
    children: [
      {
        title: '查询预约',
        link: '/search'
      },
      {
        title: '日期范围',
        link: '/dateScope'
      },
      {
        title: '预约时段',
        link: '/appointmentInterval'
      },
      {
        title: '服务顾问日历',
        link: '/calendar'
      },
      {
        title: '保养手册',
        link: '/manual'
      },
      {
        title: '预约参数',
        link: '/parameter'
      }
    ]
  },
  {
    title: '客户管理',
    link: '/client',
    children: [
      {
        title: '查询客户',
        link: '/search'
      }
    ]
  },
  {
    title: '代金券管理',
    link: '/ticket',
    children: [
      {
        title: '发放规则',
        link: '/rule'
      },
      {
        title: '发放纪录',
        link: '/record'
      }
    ]
  },
  {
    title: '系统管理',
    link: '/system',
    children: [
      {
        title: '网点管理',
        link: '/office'
      },
      {
        title: '角色管理',
        link: '/role'
      },
      {
        title: '人员管理',
        link: '/user'
      }
    ]
  }
]
