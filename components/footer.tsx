import { APP_NAME } from '@/constants/appConfig'
import { FC } from 'react'

const Footer: FC = () => {
  const currentYear = new Date().getFullYear()
  return ( 
    <footer className='border-t'>
      <div className='p-5 flex-center'>
        {currentYear} {APP_NAME}. All Rights Reserved
      </div>
    </footer>
  )
}
 
export default Footer