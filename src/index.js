import readline from 'readline'
import dotenv from 'dotenv'
import c from 'colors-cli'
import { commands } from './commands.js'
import { connect } from './db/connection.js'

// .env
dotenv.config()

// Clear the screen
process.stdout.write('\x1Bc')

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function run () {
  const taskr = c.xb27('\n Taskr ')
  prompt.question(taskr + ' ', async (input) => {
    const [commandAttemp, ...args] = input.split(' ')

    if (commands[commandAttemp]) {
      await commands[commandAttemp].action(args)
    } else {
      const cross = c.x160('✗')
      const command = c.x160(commandAttemp)
      process.stderr.write(`\n ${cross} Command not found: ${command} \n`)
    }

    run()
  })
}

run()
