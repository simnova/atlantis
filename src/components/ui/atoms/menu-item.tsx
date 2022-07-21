import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { MenuDropdown } from './menu-dropdown';

export interface MenuItem {
    id: string;
    path?: string;
    label: React.ReactNode | string;
    children?: MenuItem[];
    parent: null | string;
}

export interface MenuItemProps {
    menuItem: MenuItem;
    onShowChildren?: (show:boolean) => void;
    showChildren?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {

    let menuItem: React.ReactNode;
    if(props.menuItem.path){
        menuItem = <>
            <Link key={props.menuItem.id} to={props.menuItem.path} className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                {props.menuItem.label}
            </Link>
        </>
    }else {
        menuItem = <>
            <div 
                className='relative'
                tabIndex={1} 
                onMouseLeave={() => {
                    if(props.onShowChildren !== undefined){props.onShowChildren(false)}
                    } 
                }>

                <div className="w-100 relative inline-block py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"  onMouseOver={() => {if(props.onShowChildren !== undefined){props.onShowChildren(true)}}}   >
                    {props.menuItem.label}



                </div>
                {props.menuItem.children !== undefined ?
                    props.menuItem.parent !== null ?
                    <div className="absolute right-0 top-0">
                        <MenuDropdown menuItems={props.menuItem.children} align={props.menuItem.parent !== null ? 'right' : undefined} visible={props.showChildren??false}/>
                    </div>
                    :
                    <MenuDropdown menuItems={props.menuItem.children} align={props.menuItem.parent !== null ? 'right' : undefined} visible={props.showChildren??false}/>
                : null}
            


            </div>
        </>
    }
    return menuItem;
}