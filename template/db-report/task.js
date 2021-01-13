const $ = require('meeko')
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const gen = require('j2dir')
const util = require('util')
const outObj = require('./output-file.js')
const cp = require('child_process')
const mysqlDefaultOption = {
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'test',
  pool: 10,
  timeout: 60000,
  charset: 'utf8mb4',
  supportBigNumbers: true,
  multipleStatements: true,
  connectionLimit: 100,
  showSql: true
}
async function main() {
  let r = await inquirer.prompt([
    {
      name: 'project-path',
      message: $.c.c('.项目路径,相对当前 [.]: '),
      type: 'input',
      default: '.'
    },
    {
      name: 'host',
      message: $.c.c('Mysql host [127.0.0.1]: '),
      type: 'input',
      default: '127.0.0.1'
    },
    {
      name: 'port',
      message: $.c.c('Mysql port [3306]: '),
      type: 'input',
      default: '3306'
    },
    {
      name: 'user',
      message: $.c.c('Mysql user [root]: '),
      type: 'input',
      default: 'root'
    },
    {
      name: 'password',
      message: $.c.c('Mysql password [123456]: '),
      type: 'password',
      default: '123456'
    },
    {
      name: 'database',
      message: $.c.c('Mysql database [test]: '),
      type: 'input',
      default: 'test'
    }
  ])
  let fileObj = outObj()
  if (r['project-path'] !== '.') {
    try {
      fs.mkdirSync(path.join(process.cwd(), r['project-path']))
    } catch (e) {
      //do nothing
    }
  }
  for (i in fileObj) {
    fs.copyFileSync(
      fileObj[i][0],
      path.join(process.cwd(), r['project-path'], i)
    )
  }

  let optObj = Object.assign(mysqlDefaultOption, r)
  fs.writeFileSync(
    path.join(process.cwd(), r['project-path'], 'db-report.json'),
    JSON.stringify(optObj)
  )
  console.log('Mysql 库表结构模板生成完成！')

  cp.execSync('npm i --registry=https://registry.npm.taobao.org', {
    cwd: r['project-path']
  })
  cp.execSync('node index', { cwd: r['project-path'] })
  console.log($.c.m('mysql-output.html'), '已经生成')
  process.exit(0)
}
main()
