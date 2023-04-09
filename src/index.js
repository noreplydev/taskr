import readline from 'readline'
import { commands } from './commands.js'
import c from 'colors-cli'

// Clear the screen
process.stdout.write('\x1Bc')

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function run () {
  const taskr = c.xb27('\n Taskr ')
  prompt.question(taskr + ' ', (input) => {
    const [commandAttemp, ...args] = input.split(' ')

    if (commands[commandAttemp]) {
      commands[commandAttemp].action(args)
    } else {
      const cross = c.x160('✗')
      const command = c.x160(commandAttemp)
      process.stderr.write(`\n ${cross} Command not found: ${command} \n`)
    }

    run()
  })
}

run()
