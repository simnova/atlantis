import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SectionLayout } from './section-layout';

import { Home } from './pages/home';
import { Visiting } from './pages/visiting';
import { About } from './pages/about';
import { Contact } from './pages/contact';


import { MenuItemType } from '../../ui/atoms/menu-top';
import { Explore } from './pages/explore';


let menuConfig: MenuItemType[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/#',
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
        path: '/visiting/notices#',
        parent: 'ROOT'
      },
      {
        id: 'amenities',
        label: 'Amenities',
        path: '/visiting/amenities#',
        parent: 'ROOT'
      },
      {
        id: 'check-in',
        label: 'Check In',
        path: '/visiting/check-in#',
        parent: 'ROOT'
      },
      {
        id: 'transportation',
        label: 'Transportation',
        path: '/visiting/transportation#',
        parent: 'ROOT'
      },

      {
        id: 'rules',
        label: 'Rules',
        path: '/visiting/rules#',
        parent: 'ROOT'
      },
    ]
  },
  {
    id: 'explore',
    label: 'Explore',
    parent: null,
    children: [
      {
        id: 'dining',
        label: 'Dining',
        path: '/explore/dining#',
        parent: 'ROOT'
      },
      {
        id: 'activities',
        label: 'Activities',
        path: '/explore/activities#',
        parent: 'ROOT'
      },  
      {
        id: 'events',
        label: 'Events',
        path: '/explore/events#',
        parent: 'ROOT'
      },
      {
        id: 'attractions',
        label: 'Attractions',
        path: '/explore/attractions#',
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
        id: 'property',
        label: 'The Property',
        path: '/about/property#',
        parent: 'ROOT'
      },
      {
        id: 'ownership',
        label: 'Ownership',
        path: '/about/ownership#',
        parent: 'ROOT'
      },

      {
        id: 'maintenance',
        label: 'Maintenance',
        path: '/about/maintenance#',
        parent: 'ROOT'
      },
      {
        id: 'security',
        label: 'Security',
        path: '/about/security#',
        parent: 'ROOT'
      },
      {
        id: 'hoa',
        label: 'Home Owners Association',
        path: '/about/hoa#',
        parent: 'ROOT'
      },
      
      
    ]
    
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact#',
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
          <Route path="/explore/*" element={<Explore />} />
        </Route>
      </Routes>
    </div>

  </>)
}