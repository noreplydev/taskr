import { v1 } from 'uuid'
import c from 'colors-cli'
import { connect } from '../db/connection.js'

export const create = async (tasks) => {
  const task = tasks.join(' ')
  const taskID = v1()

  const query = `INSERT INTO tasks VALUES ('${taskID}', '${task}', false)`
  const PostgresInstance = await connect()
  await PostgresInstance.query(query)
    .then(res => {
      process.stdout.write('\n Task created:')
      process.stdout.write(`\n ${taskID} ${task} \n`)
    })
    .catch(err => {
      const cross = c.x160('✗')
      process.stderr.write(`\n ${cross} Error creating task: ${err} \n`)
    })
}
