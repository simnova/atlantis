import React, {useState} from 'react';
import { MenuItem } from './menu-item';



export interface MenuTopProps {
    menuItems: MenuItem[];
    visible: boolean;
    align?:  'right';
}

export const MenuDropdown: React.FC<MenuTopProps> = (props) => {
    const [selectedMenuKey, setSelectedMenuKey] = useState<number|undefined>(undefined);
    return(
        <div className={"absolute flex flex-col z-10 w-44 font-normal rounded divide-y divide-gray-100 drop-shadow-lg" + (props.visible ? "" : " hidden ") + ((props.align??'bottom') === 'right' ? " bg-gray-100 ": "  bg-white ")}>
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
