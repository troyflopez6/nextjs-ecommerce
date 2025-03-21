import loader from '@/assets/loader.gif'
import Image from 'next/image'

const LoadingPage = () => {
  return (
    <div
      className='flex justify-center items-center h-dvh w-dvw'
    >
      <Image 
        src={loader}
        height={150}
        width={150}
        className='h-38 w-38'
        alt='Loading...'/>
    </div> 
  )}
 
export default LoadingPage