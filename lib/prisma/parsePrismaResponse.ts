export const convertToPlainObject = <T>(value: T): T => {
  return JSON.parse(JSON.stringify(value))
}