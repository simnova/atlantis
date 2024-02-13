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
                    <p>Term expires April 2025</p>
                  </div>
                </div>            
              </div>

              
              <div className="flex items-start inline-block">
                <img src={SherrielSullivan.src}  srcSet={SherrielSullivan.srcSet}  alt={`Profile of Sherriel Sullivan`} className="object-cover w-[5rem] rounded-full mr-3"/>
                <div>
                  <strong>Sherriel Sullivan</strong>
                  <div className="text-xs">
                    <p>Treasurer</p>
                    <p>Term expires April 2024</p>
                  </div>
                </div>
              </div>
          
              <div className="flex items-start inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-[5rem] mr-3"/>
                  <div>
                    <strong>Marty Levy</strong>
                    <div className="text-xs">
                      <p>Vice President</p>
                      <p>Term expires April 2026</p>
                    </div>
                  </div>
              </div>

              <div className="flex items-start inline-block">
                <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-[5rem] mr-3"/>
                <div>
                  <strong>Joe Derkits</strong>
                  <div className="text-xs">
                    <p>Recording Secretary</p>
                    <p>Term expires April 2024</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start inline-block">
                <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-[5rem] mr-3"/>
                <div>
                  <strong>Diane McIntyre</strong>
                  <div className="text-xs">
                    <p>Corresponding Secretary</p>
                    <p>Unit 1510</p>
                    <p>Term expires April 2025</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </article>
                
      </div>
    </>
  )
}