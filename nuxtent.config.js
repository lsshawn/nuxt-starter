module.exports = {
  content: [
    'now',
    ['articles', {
      page: '/_article',
      permalink: ':year/:slug'
    }],
    ['projects', {
      page: '/projects/_project',
      isPost: false
    }]
  ]
}
