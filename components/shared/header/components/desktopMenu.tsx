import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'
import UserButton from './userButton'

const DesktopMenu = () => {
  return ( 
    <nav className='hidden md:flex w-full gap-1'>
      <ul className='flex gap-2'>
        <li>
          <ThemeToggler />
        </li>
        <li>
          <Button asChild variant='ghost'>
            <Link href='/cart'>
              <ShoppingCart />
              {'Cart'}
            </Link>
          </Button>
        </li>
        <li className='flex-center'>
          <UserButton />
        </li>
      </ul>
    </nav>
  )
}
 
export default DesktopMenu