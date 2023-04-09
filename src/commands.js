import { help } from './commands/help.js'
console.log('Hello from commands.js')

export const commands = {
  help: {
    action: help,
    description: 'Show all commands'
  }
}
