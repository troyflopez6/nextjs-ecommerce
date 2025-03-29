import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TProduct } from '@/types/product'
import { FC } from 'react'
import ProductDetails from './components/productDetails'
import ProductImages from './components/productImages'
import ProductPrice from './components/productPrice'

type TProductProps = TProduct

export const Product: FC<TProductProps> = ({ brand, category, name, rating, numReviews, price, description, stock, images }) => {
  const itemHaveStock = stock > 0
  return ( 
    <div className='grid grid-cols-1 md:grid-cols-5'>
      <div className='col-span-2'>
        <ProductImages
          images={images}
        />
      </div>
      <div className='col-span-2 p-5'>
        <ProductDetails
          brand={brand}
          category={category}
          name={name}
          rating={rating}
          numReviews={numReviews}
          price={price}
          description={description}
        />
      </div>
      <div>
        <Card>
          <CardContent className='p-4'>
            <div className="mb-2 flex justify-between">
              <div>{'Price'}</div>
              <div>
                <ProductPrice
                  price={price}
                />
              </div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>{'Status'}</div>
              {
                itemHaveStock ? 
                  <Badge
                    variant={'outline'}
                  >
                    {'In Stock'}
                  </Badge>
                  :
                  <Badge
                    variant={'destructive'}
                  >
                    {'Out of stock'}
                  </Badge>
              }
            </div>
            {
              itemHaveStock &&
        <div className="flex-center">
          <Button className='w-full'>
            {'Add to Cart'}
          </Button>
        </div>
            }
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
