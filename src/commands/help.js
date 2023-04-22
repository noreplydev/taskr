import { commands } from '../commands.js'

export const help = () => {
  const commandsEmojis = {
    create: '📦',
    check: '✅',
    uncheck: '❌',
    delete: '🗑️ ',
    list: '🧾',
    help: '❓',
    clear: '🧹',
    exit: '🚪'
  }
  const commandNames = Object.keys(commands)

  commandNames.forEach((commandName) => {
    process.stdout.write(`\n ${commandsEmojis[commandName]} ${commandName} -> ${commands[commandName].description}`)
  })
}
