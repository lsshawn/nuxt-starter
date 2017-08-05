module.exports = {
  content: [
    ['articles', {
      page: '/_article',
      permalink: ':year/:slug',
      generate: [
        'get',
        ['getAll', {
          query: { exclude: 'body' }
        }]
      ]
    }],
    ['projects', {
      permalink: ":slug",
      isPost: false
    }]
  ]
}
