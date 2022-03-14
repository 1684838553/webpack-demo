const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const toml = require('toml')
const yaml = require('yaml')
const json5 = require('json5')

module.exports = (env) => {
  return {
    entry: {
      index: './src/index.js',
      another: './src/another-module.js'
    },
  
    output: {
      filename: 'scripts/[name].[contenthash].js',
      path: path.resolve(__dirname, './dist'),
      clean: true,
      assetModuleFilename: 'images/[contenthash][ext]',
      publicPath: 'http://localhost:8080/'
    },
  
    mode: env.production ? 'production' : 'development',
  
    devtool: 'inline-source-map',
  
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'app.html',
        inject: 'body'
      }),
  
      new MiniCssExtractPlugin({
        filename: 'styles/[contenthash].css'
      })
    ],
  
    devServer: {
      static: './dist'
    },
  
    module: {
      rules: [
        {
          test: /\.png$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[contenthash][ext]'
          }
        },
  
        {
          test: /\.svg$/,
          type: 'asset/inline'
        },
  
        {
          test: /\.txt$/,
          type: 'asset/source'
        },
  
        {
          test: /\.jpg$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024 * 1024
            }
          }
        },
  
        {
          test: /\.(css|less)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
        },
  
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource'
        },
  
        {
          test: /\.(csv|tsv)$/,
          use: 'csv-loader'
        },
  
        {
          test: /\.xml$/,
          use: 'xml-loader'
        },
  
        {
          test: /\.toml$/,
          type: 'json',
          parser: {
            parse: toml.parse
          }
        },
  
        {
          test: /\.yaml$/,
          type: 'json',
          parser: {
            parse: yaml.parse
          }
        },
  
        {
          test: /\.json5$/,
          type: 'json',
          parser: {
            parse: json5.parse
          }
        },
  
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                [
                  '@babel/plugin-transform-runtime'
                ]
              ]
            }
          }
        }
      ]
    },
  
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin()
      ],
  
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  }
}