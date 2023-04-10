import { connect } from '../db/connection.js'

export async function List () {
  const query = 'SELECT * FROM tasks'
  const PostgresInstance = await connect()
  await PostgresInstance.query(query)
    .then(res => {
      process.stdout.write('\n Listing tasks:\n')
      res.rows.forEach(row => {
        const { id, task, check } = row
        process.stdout.write(`  ${check ? '●' : '○'} ${id} - ${task}\n`)
      })
    })
    .catch(err => {
      process.stderr.write(`\n Error listing tasks: ${err} \n`)
    })
}
