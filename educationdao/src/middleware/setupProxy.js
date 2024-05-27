// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://paragraph.xyz',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
