const path = require('path')
const dir = __dirname
function genConfig (obj) {
  console.log(path.join(dir, 'package.json'))

  let o = {
    'package.json': [path.join(dir, 'package.json'), obj, 'package.json'],
    '.gitignore': [path.join(dir, '.gitignore'), obj, 'Git忽略文件列表'],
    '.editorconfig': [path.join(dir, '.editorconfig'), obj, 'editorconfig'],
    '.eslintignore': [path.join(dir, '.eslintignore'), obj, 'eslintignore'],
    'index.js': [path.join(dir, 'db-report.js'), obj, 'eslintignore']
  }
  return o
}
module.exports = genConfig
