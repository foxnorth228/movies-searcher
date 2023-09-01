const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      "@src":        path.resolve( __dirname, "src"),
      "@assets":     path.resolve( __dirname, "src/assets"),
      "@components": path.resolve( __dirname, "src/components"),
      "@constants":   path.resolve( __dirname, "src/constants"),
      "@pages":      path.resolve( __dirname, "src/pages"),
      "@store":   path.resolve( __dirname, "src/store"),
      "@utils":   path.resolve( __dirname, "src/utils"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/assets',
          to: '',
          noErrorOnMissing: true
        },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './public'),
    }
  }
}
