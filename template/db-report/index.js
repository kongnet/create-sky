const report = require('./db-report')
async function mainTest () {
  await report.tableColumnList()
  console.log('mysql-output.html', '生成完成')
}
mainTest()
