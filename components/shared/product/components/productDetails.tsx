import { TProduct } from '@/types/product'
import { FC } from 'react'
import ProductPrice from './productPrice'

type TProductDetailsProps = {
    brand: TProduct['brand']
    category: TProduct['category']
    name: TProduct['name']
    rating: TProduct['rating']
    numReviews: TProduct['numReviews']
    price: TProduct['price']
    description: TProduct['description']
}

const ProductDetails: FC<TProductDetailsProps> = ({ brand, category, name, rating, numReviews, price, description }) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <p>{brand} {category}</p>
        <h1 className='h3-bold'>{name}</h1>
        <p>{rating} {'of'} {numReviews} {'Reviews'}</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <ProductPrice
            className='w-24 rounded-full bg-green-100 text-green-700 px-5 py-2'
            price={price}
          />
        </div>
      </div>
      <div className="mt-10">
        <p className='font-semibold'>{'Description'}</p>
        <p className='font-semibold'>{description}</p>
      </div>
    </>
  )}

export default ProductDetails