export const formatPriceWithDecimal = (price: number): string => {
  const [int, decimal] = price.toString().split('.')
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`
}