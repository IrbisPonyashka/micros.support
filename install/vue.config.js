const { defineConfig } = require('@vue/cli-service');
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
    proxy: {
      // Прокси для всех запросов (/*)
      '/proxy': {
        target: 'https://micros.uz', // Дефолтный целевой сервер, который может быть любым
        changeOrigin: true,
        pathRewrite: function (path, req) {
          // Переопределяем целевой адрес в зависимости от параметров запроса
          this.target = req.headers['x-target'] || 'https://micros.uz'; // Если x-target заголовок установлен, используем его
          return path.replace(/^\/proxy\//, '/'); // Удаляем "/proxy/" из пути
        }
      }
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? ''
  : ''
})
