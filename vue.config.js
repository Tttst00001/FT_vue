module.exports = {
  publicPath: './',
  outputDir: 'dist',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}