module.exports = {
  configureWebpack: {
  },
  chainWebpack: config => {
    config.module.rule('images').uses.delete('image-webpack-loader');
  }
};