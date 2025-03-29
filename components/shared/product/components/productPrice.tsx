import { cn } from '@/lib/utils/tailwindClass'
import { TProduct } from '@/types/product'
import { FC } from 'react'

type TProductPriceProps = {
  price: TProduct['price']
  className?: string
}

const ProductPrice: FC<TProductPriceProps> = ({ price, className }) => {
  const [intValue, floatValue] = price.split('.')
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