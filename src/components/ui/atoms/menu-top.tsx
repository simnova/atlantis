import React, { useState} from 'react';
import { MenuItem } from './menu-item';

export interface MenuItemType {
    id: string;
    path?: string;
    label: React.ReactNode | string;
    children?: MenuItemType[];
    parent: null | string;
}

export interface MenuTopProps {
    menuItems: MenuItemType[];
    className?: string;
}

export const MenuTop: React.FC<MenuTopProps> = (props) => {
    const [selectedMenuKey, setSelectedMenuKey] = useState<number|undefined>(undefined);
    
    return(
        <div className={`hidden md:flex items-center space-x-5 ${props.className??''} `}>
            {props.menuItems.map((item,index) => {
                return(
                    <MenuItem
                        menuItem={item} 
                        key={index} 
                        onShowChildren={
                            (showChildren) => {
                                if(showChildren === true){
                                    setSelectedMenuKey(index)
                                }
                                else{
                                    setSelectedMenuKey(undefined)
                                }
                            }
                        } 
                        showChildren={selectedMenuKey === index}  
                    />
                );
            })}
        </div>
    )
}