// 使用 Mock
const Mock = require('mockjs')

const mockData = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1
  }]
})

module.exports = {
  'GET /alarm/indicator/query': function (req, res) {
    res.json({
      success: true,
      data: {
        data: mockData.list
      }
    })
  }
}