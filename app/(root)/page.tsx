import ProductList from '@/components/shared/productList'
import { LATEST_PRODUCTS_LIMIT } from '@/constants/appConfig'
import { getLatestProducts } from '@/lib/actions/product.actions'

export const metadata = {
  title: 'Home',
  description: 'Home page of the e-commerce website ',
}

const HomePage = async () => {

  const latestProducts = await getLatestProducts({ numOfProducts: LATEST_PRODUCTS_LIMIT })

  return (
    <div>
      <ProductList 
        title='Best Sellers'
        products={latestProducts}
      />
    </div> 
  )
}
 
export default HomePage