# wechat-table
微信小程序跨行跨列多列表格实现


效果

![](https://user-gold-cdn.xitu.io/2018/8/3/164ff1a7971a340d?w=640&h=1118&f=png&s=119536)

如图，这是个列数不确定，有的单元格还要跨行跨列的复杂表格。

这里暂时最多支持4列，列数再多就放不下了。

## 实现原理
实现原理比较简单，通过多个嵌套的循环将数据取出。  

上面的例子中，最外层一共有4行：基础工资，加班工资，岗位工资，合计。第一层数据的 `name` 展示为第一列，如果每组数据有 `children`，取出 `children` 展示为第二列… 如果 `children` 长度为0，则直接显示工资数额。

这样一层一层把数据剖开，就做到了上面的效果。

## 数据格式
模拟的数据如下，如果是最后一层 `value` 值为工资数额，否则值为 `null`。嵌套的数据在 `children` 中。


```
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
```
博客地址：
[小程序跨行跨列多列复杂表格实现](https://juejin.im/post/5b64117e6fb9a04fbb1140db)
