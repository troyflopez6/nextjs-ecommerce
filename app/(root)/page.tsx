import ProductList from '@/components/shared/productList'
import { PRODUCTS_MOCK } from '@/constants/mock/products'

export const metadata = {
  title: 'Home',
  description: 'Home page of the e-commerce website ',
}

const HomePage = () => {
  return ( 
    <div>
      <ProductList 
        title='Best Sellers'
        data={PRODUCTS_MOCK}
        limit={4}
      />
    </div> 
  )
}
 
export default HomePage