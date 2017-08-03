module.exports = {
  content: [
    ['articles', {
      permalink: ":year/:slug",
      routes: [
        {
          path: '/_article',
          method: 'get'
        }
      ]
    }],
    ['projects', {
      permalink: ":slug",
      isPost: false
    }]
  ]
}
