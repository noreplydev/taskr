import c from 'colors-cli'
import { connect } from '../db/connection.js'

export const deleteTask = async (id) => {
  const taskID = id.join('')

  const query = `
    DELETE FROM tasks
    WHERE id = '${taskID}'
    RETURNING task
  `

  const PostgresInstance = await connect()
  await PostgresInstance.query(query)
    .then(res => {
      const { task } = res.rows[0]
      const status = c.x196('[deleted]')

      process.stdout.write(`\n ${status}: ${task}\n`)
    })
    .catch(err => {
      const cross = c.x160('✗')
      process.stderr.write(`\n ${cross} Error deleting task: ${err} \n`)
    })
}
