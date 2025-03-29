import ProductList from '@/components/shared/productList'

export const metadata = {
  title: 'Home',
  description: 'Home page of the e-commerce website ',
}

const HomePage = () => {

  return (
    <div>
      <ProductList
        title='Best Sellers'
      />
    </div> 
  )
}
 
export default HomePage