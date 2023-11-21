const { defineConfig } = require('@vue/cli-service');
const history = require('connect-history-api-fallback');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end();
  },
  devServer: {
    port: 2004,
    proxy: {
      // Прокси для всех запросов (/*)
      '/proxy': {
        target: 'https://oauth.bitrix.info', // Дефолтный целевой сервер, который может быть любым
        changeOrigin: true,
        pathRewrite: function (path, req) {
          // Переопределяем целевой адрес в зависимости от параметров запроса
          const target = req.headers['x-target'] || 'https://oauth.bitrix.info'; // Если x-target заголовок установлен, используем его
          return path.replace(/^\/proxy\//, '/'); // Удаляем "/proxy/" из пути
        }
      },
      '/item': {
        target: 'https://oauth.bitrix.info', 
        changeOrigin: true,
        pathRewrite: function (path, req) {
          const target = req.headers['x-target'] || 'https://oauth.bitrix.info'; 
          return path.replace(/^\/item\/proxy\//, '/'); 
        }
      }
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/it/solutions_our/micros.tech.support/app/dist/'
  : '',
})
