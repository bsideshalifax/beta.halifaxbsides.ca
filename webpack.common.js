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
      new CopyPlugin({
         patterns: [
           { from: "dist/assets", to: "assets" }
         ],
       }),
      // index.html
      new HtmlWebpackPlugin({
         inject: true,
         filename: 'index.html',
         template: 'dist/index.html',
         meta: {
            'description': { name: 'description', contnet: 'BSides is a community-driven framework for building events for and by information security community members.' },
            'keyword': { name: 'keywords', content: 'Event, BSides, Halifax, Cyber, Security, infosec' },
            'og:title': { property: 'og:title', content: 'Halifax BSides' },
            'og:description': { property: 'og:description', content: 'BSides is a community-driven framework for building events for and by information security community members.' },
            'og:type': { property: 'og:type', content: 'website' },
            'og:url': { property: 'og:url', content: 'https://halifaxbsides.ca/' },
            'twitter:card': { name: 'twitter:card', content: 'summary_large_image' },
            'twitter:title': { name: 'twitter:title', content: 'Halifax BSides' },
            'twitter:description': { name: 'twitter:description', content: 'BSides is a community-driven framework for building events for and by information security community members.' },
            'viewport': "width=device-width, initial-scale=1, shrink-to-fit=no",
         }
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
      new HtmlWebpackPartialsPlugin({
        path: 'src/partials/footer.html',
        location: 'body',
        priority: 'low'
      }),
      // cod.html
      new HtmlWebpackPlugin({
         inject: true,
         filename: 'cod.html',
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
         template_filename: 'cod.html',
         inject: true,
         prefix: 'assets/favicons/',
      }),
      new HtmlWebpackPartialsPlugin({
        path: 'src/partials/analytics.html',
        template_filename: 'cod.html',
        location: 'head',
        priority: 'high'
      }),
      new HtmlWebpackPartialsPlugin({
        path: 'src/partials/cod.html',
        template_filename: 'cod.html',
        location: 'body',
        priority: 'high'
      }),
      new HtmlWebpackPartialsPlugin({
        path: 'src/partials/footer.html',
        template_filename: 'cod.html',
        location: 'body',
        priority: 'low'
      }),
   ],

   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'public'),
      clean: true,
   },
};
