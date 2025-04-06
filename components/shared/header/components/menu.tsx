import DesktopMenu from './desktopMenu'
import MobileMenu from './mobileMenu'

const Menu = () => {
  return ( 
    <div className='flex justify-end gap-3'>
      <DesktopMenu />
      <MobileMenu />
    </div>
  )
}

export default Menu
