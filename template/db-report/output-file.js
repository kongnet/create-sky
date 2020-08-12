const path = require('path')
const dir = __dirname
function genConfig (obj) {
  let o = {
    'package.json': [path.join(dir, 'package.json'), obj, 'package.json'],
    '.gitignore': [path.join(dir, '.npmignore'), obj, 'Git忽略文件列表'],
    '.editorconfig': [path.join(dir, '.editorconfig'), obj, 'editorconfig'],
    '.eslintignore': [path.join(dir, '.eslintignore'), obj, 'eslintignore'],
    'index.js': [path.join(dir, 'index.js'), obj, 'index'],
    'db-report.js': [path.join(dir, 'db-report.js'), obj, 'db-report']
  }
  return o
}
module.exports = genConfig
