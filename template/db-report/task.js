const $ = require('meeko')
const inquirer = require('inquirer')
const gen = require('j2dir')
const outObj = require('./output-file.js')

async function main () {
  let r = await inquirer.prompt({
    name: 'project-path',
    message: $.c.c('db-report项目路径,相对当前 [db-report]: '),
    type: 'input',
    def: 'db-report'
  })
  console.log(outObj)
  gen.genMain(outObj(null), [process.cwd()], {
    templateDir: 'x'
  })
}
main()
