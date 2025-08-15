const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [],
  publicPath: "/",
  productionSourceMap: false,
  assetsDir: "assets",
})