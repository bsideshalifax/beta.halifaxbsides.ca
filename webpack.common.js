const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

module.exports = {
   entry: {
      app: './src/js/main.js',
   },

   plugins: [
      new HtmlWebpackPlugin({
         inject: true,
         filename: 'index.html',
         template: 'dist/index.html',
         meta: {
            'description': { name: 'description', contnet: 'BSides is a community-driven framework for building events for and by information security community members.' },
            'keyword': { name: 'keywords', content: 'Event, BSides, Halifax, Cyber, Security, infosec' },
            'og:title': { property: 'og:title', content: 'BSides Halifax' },
            'og:description': { property: 'og:description', content: 'BSides is a community-driven framework for building events for and by information security community members.' },
            'og:type': { property: 'og:type', content: 'website' },
            'og:url': { property: 'og:url', content: 'https://halifaxbsides.ca/' },
            'og:image': { property: 'og:image', content: 'https://halifaxbsides.ca/assets/seo/sharing-facebook.png' },
            'twitter:card': { name: 'twitter:card', content: 'summary_large_image' },
            'twitter:title': { name: 'twitter:title', content: 'BSides Halifax' },
            'twitter:description': { name: 'twitter:description', content: 'BSides is a community-driven framework for building events for and by information security community members.' },
            'twitter:image': { name: 'twitter:image', content: 'https://halifaxbsides.ca/assets/seo/sharing-twitter.png' },
            'viewport': "width=device-width, initial-scale=1, shrink-to-fit=no",
         }
      }),
      new CopyPlugin({
         patterns: [
           { from: "dist/assets", to: "assets" }
         ],
       }),
      new FaviconsWebpackPlugin({
         logo: 'dist/assets/favicons/favicon.png',
         inject: true,
         prefix: 'assets/favicons/',
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
   ],

   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'public'),
      clean: true,
   },
};
