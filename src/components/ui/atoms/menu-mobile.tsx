import { HashLink as Link } from 'react-router-hash-link';
import { MenuTopProps } from './menu-top';
import { MenuItemType } from './menu-item-type';

export interface MenuMobileProps extends MenuTopProps {
  onClick?: () => void;
}

export const MenuMobile: React.FC<MenuMobileProps> = (props) => {
    
  let renderMenuItem = (menuItem: MenuItemType, index:number, parent:string) => {
    return(
      <li key={`${parent}-${index}`}>
        {(menuItem.children && menuItem.children.length > 0) ? <>
          <p className="font-semibold">{menuItem.label}</p>
          <ul className='list-disc ml-5 '>
            {menuItem.children.map((item,childIndex) => renderMenuItem(item,childIndex,`${parent}-${index}`))}
          </ul>
        </> :<>
          <Link to={menuItem.path??''}>{menuItem.label}</Link>
        </>}
      </li>
    )
  }
  
  return(
    
    <div onClick={props.onClick} className={`p-3 transition-all ease-in-out duration-500 transform absolute w-[calc(100vw-40px)] h-[calc(100vh-60px)] bg-spicy-mix-100 block ${props.className??''} `}>
      <ul className='ml-5 grid portrait:space-y-5 landscape:grid-flow-col-dense'>
        {props.menuItems.map((item,index) => renderMenuItem(item,index,'mobile-root'))}
      </ul>
    </div>
  )
}