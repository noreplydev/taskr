import { help } from './commands/help.js'
console.log('Hello from commands.js')

export const commands = {
  help: {
    action: help,
    description: 'Show all commands'
  },
  clear: {
    action: () => {
      process.stdout.write('\x1Bc')
    },
    description: 'Clear the screen'
  }
}
