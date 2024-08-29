import chalk from "chalk"

export const blueLogger = (...params: string[]) => {
  console.log(chalk.blue(...params))
}
export const greenLogger = (...params: string[]) => {
  console.log(chalk.green(...params))
}
