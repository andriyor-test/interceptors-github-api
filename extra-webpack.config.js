const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  plugins: [
    // new Dotenv(),
    new webpack.DefinePlugin({
      'process.env': {
        SERVER: JSON.stringify(process.env.SERVER),
        PEER: JSON.stringify(process.env.PEER)
      }})
  ]
};
