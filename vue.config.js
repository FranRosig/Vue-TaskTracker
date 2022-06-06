module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://vue-tasktrackerr-backend.herokuapp.com',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}
