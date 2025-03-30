import { LATEST_PRODUCTS_LIMIT } from '@/constants/appConfig'
import { getLatestProducts } from '@/lib/actions/product.actions'
import { FC } from 'react'
import ProductCard from './components/productCard'

type TProductList = {
    title?: string
}

const ProductList: FC<TProductList> = async ({ title }) => {
  const products = await getLatestProducts({ numOfProducts: LATEST_PRODUCTS_LIMIT })
  
  return ( 
    <div className='my-10'>
      <h2 className='h2-bold mb-4'>
        {title}
      </h2>
      {
        products.length > 0 ? 
          (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center'>
              {
                products.map((prod: any, i: number) => (
                  <ProductCard
                    key={`${prod.name}_${i}`}
                    product={prod}
                  />
                ))
              } 
            </div>
          ) 
          :
          (
            <div>
              <p>
                No Products Found
              </p>
            </div>
          )
      }
    </div> 
  )
}

export default ProductList