const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/cadservices/' : '/',
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  }
})
