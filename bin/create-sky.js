#!/usr/bin/env node
const $ = require('meeko')
const path = require('path')
console.log('===========', $.c.y('欢迎使用Sky工具'), '===========')
const inquirer = require('inquirer')

const questionArr = [
  {
    type: 'list',
    name: 'templateId',
    message: '请选择工程模板 > Choice your Template:',
    default: true,
    choices: [
      { name: 'DB-report > Mysql 库表结构生成', value: 1 },
      { name: 'Github    > 常用Github项目生成(未加)', value: 2 },
      { name: "Skybase   > Sky's web框架（未加）", value: 3 }
    ]
  }
]
async function main() {
  let r = await inquirer.prompt(questionArr)
  //console.log(r)
  //console.log('PATH1:', __dirname)
  //console.log('PATH2:', process.cwd())
  switch (r.templateId) {
    case 1:
      require(path.join(__dirname, '../template/db-report/task.js'))
      break
  }
}

main()
