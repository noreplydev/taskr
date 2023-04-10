import { connect } from '../db/connection.js'
import c from 'colors-cli'

export async function List () {
  const query = 'SELECT * FROM tasks'
  const PostgresInstance = await connect()
  await PostgresInstance.query(query)
    .then(res => {
      process.stdout.write('\n Listing tasks:\n')
      res.rows.forEach(row => {
        const { id, task, done } = row
        process.stdout.write(`  ${done ? '●' : '○'} ${id} - ${task}\n`)
      })
    })
    .catch(err => {
      const cross = c.x160('✗')
      process.stderr.write(`\n ${cross} Error listing tasks: ${err} \n`)
    })
}
