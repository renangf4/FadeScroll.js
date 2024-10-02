const mix = require('laravel-mix');
const fs = require('fs');
const path = require('path');

const isFile = (pathItem) => !!path.extname(pathItem);

const mapScripts = (fromDir, toDir) => {
   let dirs = fs.readdirSync(fromDir, 'utf8');
   dirs.forEach(subDir => {
      if (isFile(`${fromDir}/${subDir}`)) {
         // Define o nome do arquivo de saída
         const outputFileName = mix.inProduction() 
            ? `${path.basename(subDir, path.extname(subDir))}.min.js` 
            : subDir;

         mix.js(`${fromDir}/${subDir}`, `${toDir}/${outputFileName}`);
      }
   });
}

mix
   .sass('src/sass/style.scss', 'dist/css/')
   .js('src/js/main.js', 'dist/js/');

mapScripts('src/js/modules/', 'dist/js/modules/');

// Executa a minificação apenas em produção para os arquivos do diretório de módulos
if (mix.inProduction()) {
   fs.readdirSync('dist/js/modules/').forEach(file => {
      if (isFile(`dist/js/modules/${file}`) && !file.endsWith('.min.js')) {
         mix.minify(`dist/js/modules/${file}`);
      }
   });
   // mix.version();
}
