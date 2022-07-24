import { Heading, HeadingLevel } from '../../../ui/atoms/heading';
import { HashLink as Link } from 'react-router-hash-link';
import { BiLinkExternal } from 'react-icons/bi';
import styles from './visiting-amenities.module.css';
import { Helmet } from 'react-helmet';

export const VisitingAmenities: React.FC<any> = (_props) => {
  const scrollWithOffset = (el:HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -85; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <>
      <Helmet>
        <title>Amenities</title>
      </Helmet>
      <div className={styles['container']}>
        <Heading level={HeadingLevel.H1}>Amenities:</Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
                <Heading level={HeadingLevel.H4}>Pool:</Heading>
                Take in the sun on the comfortable poolside chairs or lounges, and cool off with a dip in the pool. The Atlantis is proud to have one of the largest ocean front pools in Ocean City, Maryland.<br/>
                You can also escape the sun at one of the poolside umbrella shaded tables. <br/>
                <Link to={'/visiting/rules#pool'} smooth scroll={scrollWithOffset}>Learn more</Link> 
            </div>
            <div>
                <Heading level={HeadingLevel.H4}>Beach:</Heading>

                Ocean City has one of the best beaches on the east coast [&nbsp;<a href="https://travel.usnews.com/gallery/the-top-east-coast-beaches-to-visit"  target="_blank" rel="noreferrer">source:US News <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a>] and being at the Atlantis, all units have a great view of the beach. Beach access couldn't be easier, with walkways on both the north and south edges of the property. <br/><br/>

                Ocean City Beaches are free to the public (no beach passes required). <br/><br/>

                Enjoy a bonfire on the beach at night. There is a <a href="https://ocbonfires.com/"  target="_blank" rel="noreferrer">$75 permit <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> required in order to have a bonfire.

                

                
            </div>
            <div>
                <Heading level={HeadingLevel.H4}>Outdoor Showers:</Heading>
                Coming back from the beach and want to rinse all the sand off yourself and your gear?<br/>
                The Atlantis has outdoor showers that are available for all units.<br/>
                The showers are located along the southern beach walkway, both inside and outside of the pool area. <br/>
            </div>
            <div>
                <Heading level={HeadingLevel.H4}>Ground Floor Bathrooms/Showers:</Heading>
                Need to use the bathroom while at the beach or pool, or need to change into or out of your beach attire?<br/>  
                Located on the ground floor of the building in the underpass, there are bathrooms and showers for all guests.<br/><br/>
                Use your room key to access the bathrooms.
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Parking:</Heading>
                With xx parking spots, xx handicap spots, there is ample parking space for all guests.<br/>
                <Link to={'/visiting/rules#parking-permits'} smooth scroll={scrollWithOffset}>Learn more</Link>
            </div>




            <div>
                <Heading level={HeadingLevel.H4}>Bike Racks:</Heading>
                Located at ground level under the north most corner of the building.<br/>
                <Link to={'/visiting/rules#bicycles'} smooth scroll={scrollWithOffset}>Learn more</Link> 
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Water / Ice Machine:</Heading>
                Located conveniently between the security office and the pool at ground level.
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Snack Shack:</Heading>
                Located in the security office: <br/>
                <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                  <li className="mb-2">
                    <span className="font-semibold">$2.00 : </span> 
                    20oz bottles of water and soda
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">$2.00 : </span> 
                    bag of chips
                  </li>
                </ul>
                
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Dog Lot (Co-Owners Only):</Heading>
                Located conveniently by the pool, the dog lot is a secure and easy way to allow your dogs to relieve themselves.<br/>
                <Link to={'/visiting/rules#dog-lot'} smooth scroll={scrollWithOffset}>Learn more</Link> 
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Golf Courses Nearby:</Heading>
                The Atlantis is a Golfer's Paradise - with 10 courses in a 20 mile radius, you're sure to find a reason to keep hitting the links each time you visit.<br/>
                <Link to={'/explore/attractions#golf'} smooth scroll={scrollWithOffset}>Learn more</Link> 
            </div>

        </div>
      </div>
    </>
  )   
}