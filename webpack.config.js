module.exports = {
  devtool: 'eval-source-map',
  devServer: {
    open: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
};