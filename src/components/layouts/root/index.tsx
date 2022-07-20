import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SectionLayout } from './section-layout';

import { Home } from './pages/home';
import { Visiting } from './pages/visiting';
import { About } from './pages/about';
import { Contact } from './pages/contact';


import { MenuItemType } from '../../ui/atoms/menu-top';


let menuConfig: MenuItemType[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    parent: null
  },
  {
    id: 'visiting',
    label: 'Visiting Atlantis',
    parent: null,
    children: [
      {
        id: 'notices',
        label: 'Notices',
        path: '/visiting/notices',
        parent: 'ROOT'
      },
      {
        id: 'transportation',
        label: 'Transportation',
        path: '/visiting/transportation',
        parent: 'ROOT'
      },
      {
        id: 'amenities',
        label: 'Amenities',
        path: '/visiting/amenities',
        parent: 'ROOT'
      },
      {
        id: 'check-in',
        label: 'Check In',
        path: '/visiting/check-in',
        parent: 'ROOT'
      },
      {
        id: 'rules',
        label: 'Rules',
        path: '/visiting/rules',
        parent: 'ROOT'
      },
      {
        id: 'maintenance',
        label: 'Maintenance',
        path: '/visiting/maintenance',
        parent: 'ROOT'
      },
    ]
  },
  {
    id: 'about',
    label: 'About',
    parent: null,
    children: [
      {
        id: 'staff',
        label: 'Staff',
        path: '/about/staff',
        parent: 'ROOT'
      },
      {
        id: 'history',
        label: 'History',
        path: '/about/history',
        parent: 'ROOT'
      },
      {
        id: 'ownership',
        label: 'Ownership',
        path: '/about/ownership',
        parent: 'ROOT'
      },
      {
        id: 'amenities',
        label: 'Amenities',
        parent: 'ROOT',

        children: [
          {
            id: 'amenities-pool',
            label: 'Pool',
            path: '/about/amenities/pool',
            parent: 'amenities'

          },
          {
            id: 'amenities-trash',
            label: 'Trash',
            path: '/about/amenities/trash',
            parent: 'amenities'
          },

        ]
      }
      
    ]
    
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
    parent: null
  }
];

export const Root: React.FC<any> = (_props) => {
  return (<>
    <div className="flex flex-col min-h-screen">

      <Routes>
        <Route path="" element={<SectionLayout menuConfig={menuConfig} />}>
          <Route path="/" element={<Home />} />
          <Route path="visiting/*" element={<Visiting />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>

  </>)
}