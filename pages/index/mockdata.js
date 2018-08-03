// 模拟的数据
export default {
  status: 200,
  code: "ok",
  data: [{
      id: 'table001',
      name: '基础工资',
      value: null,
      children: [{
          id: 'table0011',
          name: '基本工资',
          value: 3000.0,
          children: []
        },
        {
          id: 'table0012',
          name: '绩效工资',
          value: 1200.0,
          children: []
        },
        {
          id: 'table0013',
          name: '基本工作量',
          value: null,
          children: [{
              id: 'table00131',
              name: '课时工资',
              value: 800.0,
              children: []
            },
            {
              id: 'table00132',
              name: '超课时工资',
              value: 200.0,
              children: []
            },
          ]
        },
      ]
    },
    {
      id: 'table002',
      name: '加班工资',
      value: null,
      children: [{
          id: 'table0021',
          name: '工作日加班',
          value: 1000.0,
          children: []
        },
        {
          id: 'table0022',
          name: '周末加班',
          value: 600.0,
          children: []
        },
      ]
    },
    {
      id: 'table003',
      name: '岗位工资',
      value: 1800.0,
      children: [

      ]
    },
    {
      id: 'table004',
      name: '合计',
      value: 8600.0,
      children: []
    },
  ]
}