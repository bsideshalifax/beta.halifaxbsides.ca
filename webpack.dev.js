const path = require('path')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    "filename": "[name].js"
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,

    client: {
      overlay: false
  }
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
   new HtmlWebpackPlugin({
      inject: true,
      template: 'dist/index.html',
      meta: {
         'description': { name: 'description', contnet: 'BSides is a community-driven framework for building events for and by information security community members.' },
         'keyword': { name: 'keywords', content: 'Event, BSides, Halifax, Cyber, Security, infosec' },
         'og:title': { property: 'og:title', content: 'Halifax BSides' },
         'og:description': { property: 'og:description', content: 'BSides is a community-driven framework for building events for and by information security community members.' },
         'og:type': { property: 'og:type', content: 'website' },
         'og:url': { property: 'og:url', content: 'https://halifaxbsides.ca/' },
         'og:image': { property: 'og:image', content: 'https://halifaxbsides.ca/assets/favicons/favicon.png' },
         'twitter:card': { name: 'twitter:card', content: 'summary_large_image' },
         'twitter:title': { name: 'twitter:title', content: 'Halifax BSides' },
         'twitter:description': { name: 'twitter:description', content: 'BSides is a community-driven framework for building events for and by information security community members.' },
         'twitter:image': { name: 'twitter:image', content: 'https://halifaxbsides.ca/assets/favicons/favicon.png' },
         'viewport': "width=device-width, initial-scale=1, shrink-to-fit=no",
      }
   }),
   new FaviconsWebpackPlugin({
      logo: 'dist/assets/favicons/favicon.png',
      inject: true,
   }),
   new HtmlWebpackPartialsPlugin({
     path: 'src/partials/analytics.html',
     location: 'head',
     priority: 'high'
   }),
   new HtmlWebpackPartialsPlugin({
     path: 'src/partials/home.html',
     location: 'body',
     priority: 'high'
   }),
 ]
}
