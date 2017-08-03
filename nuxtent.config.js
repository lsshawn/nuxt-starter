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
    ['books', {
      permalink: ":slug",
      isPost: false
    }],
    ['projects', {
      permalink: ":slug",
      isPost: false
    }]
  ]
}
