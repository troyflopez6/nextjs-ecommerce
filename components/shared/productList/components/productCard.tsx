import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { TProduct } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import ProductPrice from '../../product/components/productPrice'

type TProductCard = {
    product: TProduct
}

const ProductCard: FC<TProductCard> = ({ product }) => {
  const { brand, name, rating, price, slug, images, stock } = product
  return ( 
    <Card className='w-[300] md:w-full max-w-xs'>
      <CardHeader
        className='p-0 flex justify-center items-center'
      >
        <Link 
          href={`/product/${slug}`}
        >
          <Image
            className='rounded-t-xl'
            src={ images[0]} 
            alt={ name} 
            height={300} 
            width={300} 
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent
        className='p-4 grid gap-4'
      >
        <div className='text-xs'>
          {brand}
        </div>
        <Link href={`/product/${slug}`}>
          <h2 className='text-sm font-medium'>
            {name}
          </h2>
        </Link>
        <div className="flex-between gap-4">
          <p>
            {rating} {'Stars'}
          </p>
          {
            stock > 0 ? (
              <ProductPrice
                price={price}
              />
            ) : (
              <p className='text-destructive'>
                {'Out of Stock'}
              </p>
            )
          }
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard