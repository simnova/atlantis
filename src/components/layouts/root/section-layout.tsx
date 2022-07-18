import React from 'react';

import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaFax } from 'react-icons/fa';
import { Heading, HeadingLevel } from '../../ui/atoms/heading';
import { Container } from '../../ui/atoms/container';
import { Logo, LogoSize } from '../../ui/atoms/logo';
import { MenuTop, MenuItemType } from '../../ui/atoms/menu-top';
import { Outlet } from "react-router-dom";


export interface SectionLayoutProps {
  menuConfig: MenuItemType[];
}

export const SectionLayout: React.FC<any> = (props) => {
 
  return (<>
    <header className="bg-white flex-none sticky top-0 border-b">
        <nav className="max-w-screen-xl mx-auto bg-white flex flex-row text-blue-900">
          <div className="flex flex-row justify-center">
            <Logo size={LogoSize.H2} className="flex-none mb-0">Atlantis</Logo>
          </div>
          
          <div className="grow flex justify-center">
          <MenuTop menuItems={props.menuConfig}  className="w-fit inline-block " />
          </div>
          
        </nav>
    </header>
    <main className="grow mt-8">
      <div className="mx-auto max-w-screen-xl">
        <section className="mx-4 md:mx-4 lg:mx-8">
          <Outlet />
        </section>
      </div>      
    </main>
    <footer className="bg-blue-900 text-white mt-8 flex-none">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-sm">

          <div >
            <Logo size={LogoSize.H1}>Atlantis</Logo>
            <p>10300 Coastal Hwy, Ocean City, MD 21842</p>
            <div className="flex align-baseline my-2">
              <Heading className="mr-2" level={HeadingLevel.H4}><a href="https://www.facebook.com/atlantisocmd" title="Facebook" target="_blank" rel="noreferrer"><AiFillFacebook /></a></Heading>
              <Heading className="mr-2" level={HeadingLevel.H4}><a href="https://twitter.com/atlantisocmd" title="Twitter" target="_blank" rel="noreferrer"><AiFillTwitterSquare /></a></Heading>
              <Heading className="mr-2" level={HeadingLevel.H4}><a href="https://www.linkedin.com/company/atlantisocmd" title="LinkedIn" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></Heading>
            </div>
          </div>
        
          <div className="flex md:justify-end  md:mt-4 md:mr-3">
            <div>
              <div className="flex align-baseline mb-3">
                <AiOutlinePhone className="mr-2 text-lg" />
                <p><a href="tel:+01-410-524-9100" title="Phone">410-524-9100</a></p>
              </div>

              <div className="flex align-middle mb-3">
                <FaFax  className="mr-2 text-lg" />
                <p>410-524-8362</p>
              </div>

              <div className="flex align-middle mb-3">
                <AiOutlineMail  className="mr-2 text-lg" />
                <p><a href="mailto:atlantisocmd@comcast.net" title="Email">atlantisocmd@comcast.net</a></p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  </>)
}