#!/usr/bin/env node
const $ = require('meeko')
const path = require('path')
console.log('===========', $.c.y('欢迎使用Sky工具'), '===========')
const inquirer = require('inquirer')
const { dirname } = require('path')
const questionArr = [
  {
    type: 'list',
    name: 'templateId',
    message: '请选择工程模板 > Choice your Template:',
    default: true,
    choices: [
      { name: 'Github    > 常用Github项目生成', value: 1 },
      { name: "Skybase   > Sky's web框架", value: 2 },
      { name: 'DB-report > Mysql 库表结构生成', value: 3 }
    ]
  }
]
async function main () {
  let r = await inquirer.prompt(questionArr)
  //console.log(r)
  switch (r.templateId) {
    case 3:
      console.log('PATH1:', __dirname)
      console.log('PATH2:', process.cwd())
      require(path.join(__dirname, '../template/gen-db.js'))
      break
  }
}

main()
