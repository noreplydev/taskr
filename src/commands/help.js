import { commands } from '../commands.js'

export const help = () => {
  const commandNames = Object.keys(commands)

  commandNames.forEach((commandName) => {
    process.stdout.write(`\n ${commandName} -> ${commands[commandName].description} \n`)
  })
}
