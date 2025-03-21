import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { EllipsisVertical, ShoppingCart, ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggler } from './themeToggler'

export const Menu = () => {
  return ( 
    <div className='flex justify-end gap-3'>
      <nav className='hidden md:flex w-full max-w-xs gap-1'>
        <ul className='space-x-2'>
          <li className='inline'>
            <ThemeToggler />
          </li>
          <li className='inline'>
            <Button asChild variant='ghost'>
              <Link href='/cart'>
                <ShoppingCart /> Cart
              </Link>
            </Button>
          </li>
          <li className='inline'>
            <Button asChild>
              <Link href='/sign-in'>
                <UserIcon /> Sign in
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle cursor-pointer'>
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent 
            className='flex flex-col items-start p-5'
          >
            <SheetTitle> Menu </SheetTitle>
            <ThemeToggler/>
            <Button
              variant={'ghost'}
              asChild
            >
              <Link href={'/cart'}>
                <ShoppingCartIcon />
              </Link>
            </Button>
            <Button
              asChild
            >
              <Link href={'/sign-in'}>
                <UserIcon />
                {'Sign in'}
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}
