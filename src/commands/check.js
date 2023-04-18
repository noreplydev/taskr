import c from 'colors-cli'
import { connect } from '../db/connection.js'

export const check = async (id) => {
  const taskID = id.join('')

  const query = `UPDATE tasks SET done = true WHERE id = '${taskID}'`
  const PostgresInstance = await connect()
  await PostgresInstance.query(query)
    .then(res => {
      process.stdout.write('\n Task marked as done:')
      process.stdout.write(`\n ${taskID} \n`)
    })
    .catch(err => {
      const cross = c.x160('✗')
      process.stderr.write(`\n ${cross} Error udpating task: ${err} \n`)
    })
}
