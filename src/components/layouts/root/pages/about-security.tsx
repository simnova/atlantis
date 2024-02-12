import { Heading, HeadingLevel } from '../../../ui/atoms/heading';
import { Helmet } from 'react-helmet';
import styles from './about-security.module.css'; 

import MichelleJones from '../../../../assets/staff-michelle-jones.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp&useResponsiveLoader=true';
import KenBruce from '../../../../assets/staff-ken-bruce.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp&useResponsiveLoader=true';
import LucreceBruce from '../../../../assets/staff-lucrece-bruce.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp&useResponsiveLoader=true';
import LaurentBruce from '../../../../assets/staff-laurent-bruce.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp&useResponsiveLoader=true';
import MichelleBruce from '../../../../assets/staff-michelle-bruce.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp&useResponsiveLoader=true';


export const AboutSecurity: React.FC<any> = (_props) => {
    return (
      <>
        <Helmet>
          <title>Security</title>
        </Helmet>
        <Heading level={HeadingLevel.H1}>Security Services:</Heading>
        <div className={['', styles['container']].join(' ') }>
          <div>
              The Atlantis is a secure environment, and we are committed to protecting your privacy and security. The security team is available to assist you with any security issues you may have.
              <br/><br/>
              <span className="font-bold">Availability :</span><br/>
              (off season schedule currently in place)<br/><br/>

              Phone: <a href="tel:+1-443-373-1894">443-373-1894</a><br/><br/>
              Emergencies : <a href="tel:+1-911">911</a><br/><br/>

              <span className="font-bold">Services Provided Include: </span> 
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                  <li className="mb-2">Unit Lockout</li>
                  <li className="mb-2">Guest Registration and Parking Passes</li>
                  <li className="mb-2">Selling Snacks / Sodas</li>
                  <li className="mb-2">Security Video Monitoring</li>
              </ul>
          </div>


          <article>
            <Heading level={HeadingLevel.H5}>Security Staff:</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              <div className="flex items-center inline-block">
                <img src={MichelleJones.src}  srcSet={MichelleJones.srcSet}  alt={`Profile of Melvin Rostek`} className="w-20 self-center rounded-full mt-6 ml-6 mb-6"/>
                <div className='ml-6'>
                  <strong>Michelle Jones</strong><br/>
                  <span>Security Manager</span>
                </div>
              </div>

              <div className="flex items-center inline-block">
                <img src={KenBruce.src}  srcSet={KenBruce.srcSet}  alt={`Profile of Melvin Rostek`} className="w-20 self-center rounded-full mt-6 ml-6 mb-6"/>
                <div className='ml-6'>
                  <strong>Ken Bruce</strong><br/>
                  <span>Security</span>
                </div>
              </div>

              <div className="flex items-center inline-block">
                <img src={LaurentBruce.src}  srcSet={LaurentBruce.srcSet}  alt={`Profile of Melvin Rostek`} className="w-20 self-center rounded-full mt-6 ml-6 mb-6"/>
                <div className='ml-6'>
                  <strong>Laurent Bruce</strong><br/>
                  <span>Security</span>
                </div>
              </div>

              <div className="flex items-center inline-block">
                <img src={MichelleBruce.src}  srcSet={MichelleBruce.srcSet}  alt={`Profile of Melvin Rostek`} className="w-20 self-center rounded-full mt-6 ml-6 mb-6"/>
                <div className='ml-6'>
                  <strong>Michelle Bruce</strong><br/>
                  <span>Security</span>
                </div>
              </div>

            </div>
          </article>
        </div>
      </>
    )
}
