const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', proxy({
    target: 'https://securethebox-server.securethebox.us',
    changeOrigin: true,
  }));
};