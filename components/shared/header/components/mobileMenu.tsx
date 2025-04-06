import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { EllipsisVertical, Link, ShoppingCartIcon } from 'lucide-react'
import ThemeToggler from './ThemeToggler'
import UserButton from './userButton'

const MobileMenu = () => {
  return ( 
    <nav className='md:hidden'>
      <Sheet>
        <SheetTrigger className='align-middle cursor-pointer'>
          <EllipsisVertical />
        </SheetTrigger>
        <SheetContent 
          className='flex flex-col items-start p-5'
        >
          <SheetTitle> {'Menu'} </SheetTitle>
          <ThemeToggler/>
          <Button
            variant={'ghost'}
            asChild
          >
            <Link href={'/cart'}>
              <ShoppingCartIcon />
              {'Cart'}
            </Link>
          </Button>
          <UserButton />
        </SheetContent>
      </Sheet>
    </nav>
  )
}
 
export default MobileMenu