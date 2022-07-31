import React from 'react';


export interface MenuItemType {
    id: string;
    path?: string;
    label: React.ReactNode | string;
    children?: MenuItemType[];
    parent: null | string;
}
