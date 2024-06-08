import { Heading, HeadingLevel } from '../../../ui/atoms/heading';
import { Helmet } from 'react-helmet';

import MelvinRostek from '../../../../assets/staff-melvin-rostek.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp&useResponsiveLoader=true';

import BrooksTruitt from '../../../../assets/staff-brooks-truitt.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp&useResponsiveLoader=true';
import RossPhillips from '../../../../assets/staff-ross-phillips.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp&useResponsiveLoader=true';
import TristanNelson from '../../../../assets/staff-tristan-nelson.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp&useResponsiveLoader=true';


export const AboutMaintenance: React.FC<any> = (_props) => {
   
    return (
      <>
        <Helmet>
          <title>Maintenance Services</title>
        </Helmet>
        <Heading level={HeadingLevel.H1}>Maintenance Services:</Heading>

        <div>

            The Atlantis wishes your visit to be a pleasant experience, should you experience any issues with the building, or your unit, contact the your rental agency (if you are a visitor) or  Atlantis office (if you are a co-owner) with your issue as soon as possible.
            
            The onsite maintenance team assists co-owners by make any necessary repairs as soon as possible after being notified of the problem.<br/><br/>

            The full time maintenance crew works hard to keep the Atlantis in good working order, both the shared building facilities as well as individual units.<br/><br/>

            Maintenance Staff is available 7 days a week 7AM to 5PM during the summer season.<br/><br/>


            <span className="font-bold">Services Provided Include: </span> 
            <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">HVAC Issue Resolution</li>
                <li className="mb-2">Garbage Disposal Repair</li>
                <li className="mb-2">Pool maintenance and issue resolution</li>
                <li className="mb-2">Renovations</li>
            </ul>

            <br/><br/>
            Contact the main office number, provide your name and unit number and clearly describe the issue.
        </div>


        <article>
        <Heading level={HeadingLevel.H5}>Maintenance Staff:</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">



          <div className="flex items-center inline-block">
            <img src={MelvinRostek.src}  srcSet={MelvinRostek.srcSet}  alt={`Profile of Melvin Rostek`} className="w-20 self-center rounded-full mt-6 ml-6 mb-6"/>
            <div className='ml-6'>
              <strong>Melvin Rostek</strong><br/>
              <span>Maintenance</span>
            </div>
          </div>


          <div className="flex items-center inline-block">
            <img src={TristanNelson.src}  srcSet={TristanNelson.srcSet}  alt={`Profile of Melvin Rostek`} className="w-20 self-center rounded-full mt-6 ml-6 mb-6"/>
            <div className='ml-6'>
              <strong>Tristan Nelson</strong><br/>
              <span>Maintenance</span>
            </div>
          </div>


        </div>
        </article>
      </>
    )
}
