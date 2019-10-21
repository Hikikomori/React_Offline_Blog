const path = require(`path`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const webpack = require(`webpack`);


module.exports = {
  entry: [`./src/index.jsx`, `./src/styles/main.scss`],
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `./public/dist`)
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === `development`,
            },
          },
          {
            loader: `css-loader`, options: {
              sourceMap: true
            }
          },
          {
            loader: `postcss-loader`,
            options: {
              sourceMap: true,
              config: {
                path: `postcss.config.js`
              }
            }
          },
          {
            loader: `sass-loader`, options: {sourceMap: true}
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g)$/i,
        use: [
          {
            loader: `file-loader`,
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ]
  },
  devServer: {
    contentBase: `./public/`,
    compress: false,
    publicPath: `http://localhost:8000/`,
    watchContentBase: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `bundle.css`,
    }),
    new webpack.ProvidePlugin({
      'React': `react`,
      'ReactDOM': `react-dom`,
      'PropTypes': `prop-types`
    }),
  ],
  resolve: {
    extensions: [`.js`, `.jsx`, `json`],
    alias: {
      'assets': path.resolve(__dirname, `./src/assets`)
    }
  },
  devtool: `source-map`
};
