import { Product } from '@/components/shared/product'
import { getProductBySlug } from '@/lib/actions/product.actions'
import { notFound } from 'next/navigation'
import { FC } from 'react'

type TProductDetailsPageProps = {
    params: Promise<{slug: string}>
}

const ProductPage: FC<TProductDetailsPageProps> = async ({ params }) => {
  const { slug } = await params
  const product = await getProductBySlug({ slug, })
  
  if (!product) return notFound()
    
  return ( 
    <section>
      <Product
        {...product}
      />
    </section>
  )
}

export default ProductPage
 