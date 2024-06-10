const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/Magix',
    createProxyMiddleware({
      target: 'http://www.maxpacific.net',
      changeOrigin: true,
    })
  );
};
