import { create } from './commands/create.js'
import { List } from './commands/list.js'
import { help } from './commands/help.js'
import { check } from './commands/check.js'
import { unCheck } from './commands/unCheck.js'
import { deleteTask } from './commands/delete.js'
console.log('Hello from commands.js')

export const commands = {
  create: {
    action: create,
    description: 'Create a new task'
  },
  check: {
    action: check,
    description: 'Mark a task as done using it´s id'
  },
  uncheck: {
    action: unCheck,
    description: 'Mark a task as undone using it´s id'
  },
  delete: {
    action: deleteTask,
    description: 'Delete a task using it´s id'
  },
  list: {
    action: List,
    description: 'List all tasks'
  },
  help: {
    action: help,
    description: 'Show all commands'
  },
  clear: {
    action: () => {
      process.stdout.write('\x1Bc')
    },
    description: 'Clear the screen'
  },
  exit: {
    action: () => {
      process.exit(0)
    },
    description: 'Exit the program'
  }
}
