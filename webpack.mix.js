// LARAVEL MIX
const mix = require('laravel-mix');

mix
   .sass('src/sass/style.scss', 'dist/css/')
   .js('src/js/main.js', 'dist/js/')
   .js('src/js/modules/fadescroll.js', 'dist/js/modules/')

   .options({
      processCssUrls: false,
      assetModules: false,
      notifications: {
         onSuccess: false
      }
   })
   .sourceMaps(false, 'source-map');