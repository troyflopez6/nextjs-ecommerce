'use client'
import { cn } from '@/lib/utils/tailwindClass'
import Image from 'next/image'
import { FC, useState } from 'react'

type TProductImagesProps = {
  images: string[]
}

const ProductImages:FC<TProductImagesProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<string>(images[0])
  return ( 
    <div className='space-y-4'>
      <Image
        src={currentImage}
        alt='product image'
        width={1000}
        height={1000}
        className='min-h-[300px] object-cover object-center rounded-md'
      />
      <div className="flex gap-5">
        {
          images.map((image) => (
            <div 
              key={image}
              onClick={() => setCurrentImage(image)}
              className={cn('border hover:border-orange-600 rounded-md', {
                'border-orange-500': currentImage === image,
              })}
            >
              <Image
                src={image}
                alt='product image'
                width={100}
                height={100}
                className='cursor-pointer rounded-md'
              />
            </div>
          ) )
        }
      </div>
    </div>
  )
}

export default ProductImages