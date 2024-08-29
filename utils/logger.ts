import chalk from "chalk"

export const logger = {
  blue: (...params: string[]) => {
    console.log(chalk.blue(...params))
  },
  green: (...params: string[]) => {
    console.log(chalk.green(...params))
  }
}
