var sass = require('sass');
var result = sass.renderSync({
  file: "style.scss",
  includePaths:
  [
      join(dirname(module.filename), 'node_modules/@material'),
      join(dirname(module.filename), 'src/variables.scss'),
  ],
  // sourceMap: true,
  outFile: join(dirname(module.filename), "www/main.css")
})
