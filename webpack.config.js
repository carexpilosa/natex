module.exports = {
  output: {
    publicPath: '/wandern/'
  },
  devtool: 'eval-source-map',
  devServer: {
    open: true,
    historyApiFallback: true,
    port: 8088
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
};
