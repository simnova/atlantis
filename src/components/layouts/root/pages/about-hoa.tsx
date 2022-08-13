import { Helmet } from 'react-helmet';
import { Heading, HeadingLevel } from '../../../ui/atoms/heading';

import MelvinRostek from '../../../../assets/staff-melvin-rostek.jpg?sizes[]=200&format=webp&useResponsiveLoader=true';
import SherrielSullivan from '../../../../assets/staff-sherriel-sullivan.jpg?sizes[]=200&format=webp&useResponsiveLoader=true';
import JohnFoley from '../../../../assets/staff-john-foley.jpg?sizes[]=200&format=webp&useResponsiveLoader=true';
import PatrickGidich from '../../../../assets/resident-patrick-gidich.jpg?sizes[]=200&format=webp&useResponsiveLoader=true';
import JoyceGloekler from '../../../../assets/resident-joyce-gloekler.jpg?sizes[]=200&format=webp&useResponsiveLoader=true';
import ConnieRamsey from '../../../../assets/resident-connie-ramsey.jpg?sizes[]=200&format=webp&useResponsiveLoader=true';
import SaraBerchock from '../../../../assets/resident-sara-berchock.jpg?sizes[]=200&format=webp&useResponsiveLoader=true';

export const AboutHOA: React.FC<any> = (_props) => {
  return (
    <>
      <Helmet>
        <title>Home Owners Association</title>
      </Helmet>
      <Heading level={HeadingLevel.H1}>Home Owners Association:</Heading>
      <p>
        The Atlantis has benefited from a active community of co-owners who are passionate in ensuring Atlantis remains a welcoming destination and home for years to come.<br/><br/>
      </p>
      <div className="space-y-5 space-y-8">
        <article>
          <Heading level={HeadingLevel.H5}>Board of Directors</Heading>
          <p> 
            The Board of Directors is comprised of elected members of the community. Board meetings take place monthly throughout the year and can be attended in person of online by co-owners of the Atlantis.
          </p>
          <br/>
          <div>
            <strong>Board Members:</strong>
            <div className="grid text-sm m-9" style={{ gridTemplateColumns:'repeat(auto-fill, 15rem)', gap:'20px'}}>
              <div className="flex items-start inline-block">
                <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-[5rem] mr-3"/>
                <div>
                  <strong>Joseph C. Perry,Sr.</strong>
                  <div className="text-xs">
                    <p>President</p>
                    <p>Unit XXX</p>
                    <p>Term expires April 2025</p>
                  </div>
                </div>            
              </div>
              <div className="flex items-start inline-block">
                <img src={MelvinRostek.src}  srcSet={MelvinRostek.srcSet}  alt={`Profile of Melvin Rostek`} className="object-cover w-[5rem] rounded-full mr-3"/>
                <div>
                  <strong>Melvin Rostek</strong>
                  <div className="text-xs">
                    <p>Vice President</p>
                    <p>Unit XXX</p>
                    <p>Term expires April 2024</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start inline-block">
                <img src={SherrielSullivan.src}  srcSet={SherrielSullivan.srcSet}  alt={`Profile of Sherriel Sullivan`} className="object-cover w-[5rem] rounded-full mr-3"/>
                <div>
                  <strong>Sherriel Sullivan</strong>
                  <div className="text-xs">
                    <p>Treasurer</p>
                    <p>Unit XXX</p>
                    <p>Term expires April 2024</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start inline-block">
                <img src={JohnFoley.src}  srcSet={JohnFoley.srcSet}  alt={`Profile of John Foley`} className="object-cover w-[5rem] rounded-full mr-3"/>
                <div>
                  <strong>John Foley</strong>
                  <div className="text-xs">
                    <p>Secretary</p>
                    <p>Unit 503</p>
                    <p>Term expires April 2025</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-[5rem] mr-3"/>
                  <div>
                    <strong>Marty Levy</strong>
                    <div className="text-xs">
                      <p>Corresponding Secretary</p>
                      <p>Unit XXX</p>
                      <p>Term expires April 2023</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>

        </article>
        <div>       
          <Heading level={HeadingLevel.H5}>Committees</Heading>
          <p> 
            Co-Owners are encouraged to join and form committees to help advance the mission of the Atlantis. The following are a sampling of the current committees and their recent accomplishments.
          </p>
        </div>

        <article>
          <Heading level={HeadingLevel.H6}>Pool Committee</Heading>
          <div className="ml-8 space-y-8"> 
            <div>
              <strong>Committee Members:</strong>
              <div className="grid text-sm ml-9 my-3" style={{ gridTemplateColumns:'repeat(auto-fill, 10rem)', gap:'20px'}}>
                <div className="flex items-center inline-block">
                  <img src={ConnieRamsey.src}  srcSet={ConnieRamsey.srcSet}  alt={`Profile of Connie Ramsey`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>Connie Ramsey</strong><br/>
                    <p>Unit 603</p>
                  </div>            
                </div>
                <div className="flex items-center inline-block">
                  <img src={SaraBerchock.src}  srcSet={SaraBerchock.srcSet}  alt={`Profile of Sara Berchock`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>Sara Berchock</strong><br/>
                    <p>Unit 906</p>
                  </div>            
                </div>
                <div className="flex items-center inline-block">
                  <img src={SherrielSullivan.src}  srcSet={SherrielSullivan.srcSet}  alt={`Profile of Sherriel Sullivan`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>Sherriel Sullivan</strong><br/>
                    <p>Unit XXX</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <span className="font-bold">Committee Charter: </span> <br/>
              The Pool Committee aims to provide ensure the pool environment is secure, clean and welcoming.
            </p>
            <p>
              <span className="font-bold">Recent Accomplishments: </span> 
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                
              </ul>
            </p>
          </div>
        </article>

        <article>
          <Heading level={HeadingLevel.H6}>Vending Committee</Heading>
          <div className="ml-8 space-y-8"> 
            <div>
              <strong>Committee Members:</strong>
              <div className="grid text-sm ml-9 my-3" style={{ gridTemplateColumns:'repeat(auto-fill, 10rem)', gap:'20px'}}>
                <div className="flex items-center inline-block">
                  <img src={ConnieRamsey.src}  srcSet={ConnieRamsey.srcSet}  alt={`Profile of Connie Ramsey`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>Connie Ramsey</strong><br/>
                    <p>Unit 603</p>
                  </div>            
                </div>
                <div className="flex items-center inline-block">
                  <img src={SherrielSullivan.src}  srcSet={SherrielSullivan.srcSet}  alt={`Profile of Sherriel Sullivan`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>Sherriel Sullivan</strong><br/>
                    <p>Unit XXX</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <span className="font-bold">Committee Charter: </span> <br/>
              The Vending Committee aims to provide convenient and affordable access to snacks and beverages to all visitors to the Atlantis while also generating additional revenue.
            </p>
            <p>
              <span className="font-bold">Recent Accomplishments: </span> 
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">
                  <span className="font-semibold">APR-2022 : </span> 
                  Chips / Soda and Water have been relocated to the Security Office and are now available to all visitors. The Committee members are helping to restock supplies from the local BJs Wholesale Club.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">DEC-2021 : </span> 
                  Filtered Water / Ice Machine added in underpass offering quick an easy way to get water and ice without having to leave the property.
                </li>
              </ul>
            </p>
          </div>
        </article>
        <article>
          <Heading level={HeadingLevel.H6}>Grounds Committee</Heading>
          <div className="ml-8 space-y-8"> 
            <div>
              <strong>Committee Members:</strong>
              <div className="grid text-sm ml-9 my-3" style={{ gridTemplateColumns:'repeat(auto-fill, 10rem)', gap:'20px'}}>
                <div className="flex items-center inline-block">
                  <img src={ConnieRamsey.src}  srcSet={ConnieRamsey.srcSet}  alt={`Profile of Connie Ramsey`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>Connie Ramsey</strong><br/>
                    <p>Unit 603</p>
                  </div>            
                </div>
                <div className="flex items-center inline-block">
                  <img src={SaraBerchock.src}  srcSet={SaraBerchock.srcSet}  alt={`Profile of Sara Berchock`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>Sara Berchock</strong><br/>
                    <p>Unit 906</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img src={SherrielSullivan.src}  srcSet={SherrielSullivan.srcSet}  alt={`Profile of Sherriel Sullivan`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>Sherriel Sullivan</strong><br/>
                    <p>Unit XXX</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <span className="font-bold">Committee Charter: </span> <br/>
              The Grounds Committee aims to ensure that the exterior of the Atlantis is welcoming and vibrant through flower arrangements, flowerbeds, and other decorations.
            </p>
            <p>
              <span className="font-bold">Recent Accomplishments: </span> 
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">
                  <span className="font-semibold">JUN-2022 : </span> 
                  Through the hard work of the Committee members, visitors to the Atlantis are welcomed with new flower pots and flower arrangements at the entrance as well as in the Pool area.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">APR-2022 : </span> 
                  A new clock has been selected and mounted on the building within easy view of the pool. This new clock is much easier to read and better matches the aesthetic of the Atlantis.
                </li>
              </ul>
            </p>
          </div>
        </article>
        <article>
          <Heading level={HeadingLevel.H6}>Internet and TV Committee</Heading>
          <div className="ml-8 space-y-8"> 
            <div>
              <strong>Committee Members:</strong>
              <div className="grid text-sm ml-9 my-3" style={{ gridTemplateColumns:'repeat(auto-fill, 10rem)', gap:'20px'}}>
                <div className="flex items-center inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                  <div>
                    <strong>Diane McIntyre</strong><br/>
                    <p>Unit 604</p>
                  </div>            
                </div>
                <div className="flex items-center inline-block">
                  <img src={JoyceGloekler.src}  srcSet={JoyceGloekler.srcSet}  alt={`Profile of Joyce Gloekler`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>Joyce Gloekler</strong><br/>
                    <p>Unit 704</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img src={PatrickGidich.src}  srcSet={PatrickGidich.srcSet}  alt={`Profile of Patrick Gidich`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>Patrick Gidich</strong><br/>
                    <p>Unit 1510</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img src={JohnFoley.src}  srcSet={JohnFoley.srcSet}  alt={`Profile of John Foley`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>John Foley</strong><br/>
                    <p>Unit 503</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <span className="font-bold">Committee Charter: </span> <br/>
              The Internet and TV Committee aims to meet the changing needs of co-owners of the Atlantis. This committee will be responsible for the following:
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">
                  Determining the service providers that can provide services to the Atlantis, and understand current infrastructure to allow vendors to ascertain the investment needed to meet the needs of the Atlantis and what services are possible.
                </li>
                <li className="mb-2">
                  Surveying the co-owners to determine the willingness to pay for services and what services are desired.
                </li>
                <li className="mb-2">
                  Developing a RFP for the services desired, with a 3 year price-lock guarantee, with optional continued renewal with a maximum of 5% increase at the end the 3rd year, for a period of up to 6 years.
                </li>
                <li className="mb-2">
                  Providing the co-owners with a short list of possible options and allow the co-owners to vote on which plan(s) the Atlantis should offer co-owners.
                </li>
              </ul>
            </p>
            <p>
              <span className="font-bold">Recent Accomplishments: </span> 
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">
                    <span className="font-semibold">DEC-2022 : </span> 
                    Established contacts with Comcast and Amtech.
                </li>
              </ul>
            </p>
          </div>
        </article>
        <article>
          <Heading level={HeadingLevel.H6}>Website Committee</Heading>
          <div className="ml-8 space-y-8"> 
            <div>
              <strong>Committee Members:</strong>
              <div className="grid text-sm ml-9 my-3" style={{ gridTemplateColumns:'repeat(auto-fill, 10rem)', gap:'20px'}}>
                
                <div className="flex items-center inline-block">
                  <img src={PatrickGidich.src}  srcSet={PatrickGidich.srcSet}  alt={`Profile of Patrick Gidich`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>Patrick Gidich</strong><br/>
                    <p>Unit 1510</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img src={JohnFoley.src}  srcSet={JohnFoley.srcSet}  alt={`Profile of John Foley`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>John Foley</strong><br/>
                    <p>Unit 503</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <span className="font-bold">Committee Charter: </span> <br/>
              The Website Committee aims to deliver a solution to both meet the needs of guests and co-owners of the Atlantis. This committee will be responsible for the following:
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">
                  Deliver a public facing website as well as a private portal for the co-owners to interact with the Atlantis.
                </li>
              </ul>
            </p>
            <p>
              <span className="font-bold">Recent Accomplishments: </span> 
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">
                    <span className="font-semibold">AUG-2022 : </span> 
                    Designed and Launched the Atlantis Website.
                </li>
              </ul>
            </p>
          </div>
        </article>
        <article>
          <Heading level={HeadingLevel.H6}>Security and Smart Lock Committee</Heading>
          <div className="ml-8 space-y-8"> 
            <div>
              <strong>Committee Members:</strong>
              <div className="grid text-sm ml-9 my-3" style={{ gridTemplateColumns:'repeat(auto-fill, 10rem)', gap:'20px'}}>
                
                <div className="flex items-center inline-block">
                  <img src={PatrickGidich.src}  srcSet={PatrickGidich.srcSet}  alt={`Profile of Patrick Gidich`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>Patrick Gidich</strong><br/>
                    <p>Unit 1510</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img src={JohnFoley.src}  srcSet={JohnFoley.srcSet}  alt={`Profile of John Foley`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>John Foley</strong><br/>
                    <p>Unit 503</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img src={MelvinRostek.src}  srcSet={MelvinRostek.srcSet}  alt={`Profile of Melvin Rostek`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>Melvin Rostek</strong><br/>
                    <p>Unit XXX</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <span className="font-bold">Committee Charter: </span> <br/>
              The Security Committee aims to meet the changing needs of co-owners of the Atlantis. This committee will be responsible for the following:
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">
                  Determining upgrade path for the Video Surveillance System currently installed at the Atlantis, and understand current infrastructure to allow vendors to ascertain the investment needed to meet the needs of the Atlantis and what services are possible.
                </li>
                <li className="mb-2">
                  Determining feasibility of using smart locks for residential units as well as ground-floor locks at the Atlantis.
                </li>
                <li className="mb-2">
                  Surveying the co-owners to determine the willingness to pay for services and what services are desired.
                </li>
                <li className="mb-2">
                  Developing a RFP for the services desired, with a price forecast of replacing the entire system using a phased based approach addressing immediate needs first.
                </li>
                <li className="mb-2">
                  Providing the co-owners with a short list of possible options and allow the co-owners to vote on which plan(s) the Atlantis should offer co-owners.
                </li>
              </ul>
            </p>
            <p>
              <span className="font-bold">Recent Accomplishments: </span> 
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">
                    <span className="font-semibold">AUG-2022 : </span> 
                    Involved 3 vendors in the analysis of the Video Surveillance System.
                </li>
              </ul>
            </p>
          </div>
        </article>
        <article>
          <Heading level={HeadingLevel.H6}>EV Charging Station Committee</Heading>
          <div className="ml-8 space-y-8"> 
            <div>
              <strong>Committee Members:</strong>
              <div className="grid text-sm ml-9 my-3" style={{ gridTemplateColumns:'repeat(auto-fill, 10rem)', gap:'20px'}}>
                
                <div className="flex items-center inline-block">
                  <img src={PatrickGidich.src}  srcSet={PatrickGidich.srcSet}  alt={`Profile of Patrick Gidich`} className="object-cover w-12 rounded-full mr-3"/>
                  <div>
                    <strong>Patrick Gidich</strong><br/>
                    <p>Unit 1510</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                  <div>
                    <strong>George & Helen Akparanta</strong><br/>
                    <p>Unit 1601</p>
                  </div>
                </div>                
              </div>
            </div>
            <p>
              <span className="font-bold">Committee Charter: </span> <br/>
              The Electric Vehicle Charging Committee seeks to determine the feasibility of offering a cost effective charging solution for guests and co-owners of the Atlantis. This committee will be responsible for the following:
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">
                  Determining what types of charging stations can be installed at the Atlantis, and understand the investment needed to install and provide charging services and if it can be run profitably and competitively.
                </li>
                <li className="mb-2">
                  Surveying the co-owners to determine the willingness to pay for services and what services are desired.
                </li>
                <li className="mb-2">
                  Developing a RFP for the services desired, with a 3 year investment and payback schedule, with a 5yr outlook of profit/loss.
                </li>
                <li className="mb-2">
                  Providing the co-owners with a short list of possible options and allow the co-owners to vote on which plan(s) the Atlantis should offer co-owners.
                </li>
              </ul>
            </p>
            <p>
              <span className="font-bold">Recent Accomplishments: </span> 
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
              <li className="mb-2">
                    <span className="font-semibold">AUG-2022 : </span> 
                    Contacted Tesla about about recently released pay-per-use functionality.
                </li>
                <li className="mb-2">
                    <span className="font-semibold">JAN-2021 : </span> 
                    Contacted Tesla about destination charging and pay-per-use charging functionality - Tesla noted pay-per-use was coming in 2022.
                </li>
              </ul>
            </p>
          </div>
        </article>
      </div>
    </>
  )
}