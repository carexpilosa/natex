module.exports = {
  output: {
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  devServer: {
    open: true,
    historyApiFallback: true
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
