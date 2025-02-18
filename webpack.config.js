const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

  entry: {
    'app': './src/js/index.js',
    'travel1': './src/js/travel1.js',
    'travel2': './src/js/travel2.js',
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "images",
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
            }
          },
        ],
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
    ],
  },

  performance: {
    hints: false
  },

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    // compress: true,
    port: 9000,
    writeToDisk: true,
    stats: 'errors-only',
    open: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['app']
    }),

    new HtmlWebpackPlugin({
      template: './src/travel1.html',
      filename: 'travel1.html',
      chunks: ['app', 'travel1']
    }),

    new HtmlWebpackPlugin({
      template: './src/travel2.html',
      filename: 'travel2.html',
      chunks: ['app', 'travel2']
    }),

    new HtmlWebpackPlugin({
      template: './src/Login.html',
      filename: 'Login.html',
      chunks: ['app']
    }),

    new HtmlWebpackPlugin({
      template: './src/register.html',
      filename: 'register.html',
      chunks: ['app']
    }),


    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],
};