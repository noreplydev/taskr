import { connect } from '../db/connection.js'
import c from 'colors-cli'

export const unCheck = async (id) => {
  const taskID = id.join('')

  const query = `
    UPDATE tasks 
    SET done = false 
    WHERE id = '${taskID}'
    RETURNING task, id
  `
  const PostgresInstance = await connect()
  await PostgresInstance.query(query)
    .then(res => {
      const { task, id } = res.rows[0]
      const status = c.x160('not done')
      process.stdout.write(`\n Task marked as ${status}:`)
      process.stdout.write(`\n [${id.slice(0, 6)}...]: ${task}\n`)
    })
    .catch(err => {
      const cross = c.x160('✗')
      process.stderr.write(`\n ${cross} Error udpating task: ${err} \n`)
    })
}
