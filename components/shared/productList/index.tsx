import { FC } from 'react'
import ProductCard from './components/productCard'

type TProductList = {
    title?: string
    data: any
    limit?: number
}

const ProductList: FC<TProductList> = ({ title, data, limit }) => {
  const { products } = data
  const limitedProducts = limit? products.slice(0, limit) : products
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
                limitedProducts.map((prod: any, i: number) => (
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