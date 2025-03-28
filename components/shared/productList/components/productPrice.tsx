import { cn } from '@/lib/utils'
import { FC } from 'react'

type TProductPriceProps = {
  price: number
  className?: string
}

const ProductPrice: FC<TProductPriceProps> = ({ price, className }) => {
  const stringValue = Number(price).toFixed(2)
  const [intValue, floatValue] = stringValue.split('.')
  return (
    <p
      className={cn(
        'text-2xl',
        className
      )}
    >
      <span className='text-xs align-super'>
        $
      </span>
      {intValue}
      <span className='text-xs align-super'>
        .{floatValue}
      </span>
    </p>
  )}

export default ProductPrice