import { Helmet } from "react-helmet";
import { BiLinkExternal } from "react-icons/bi";
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"
import styles from './about-property.module.css'; 

/* https://betterprogramming.pub/how-to-optimize-images-for-usage-in-websites-9eaee88c2e6b */
import atlantisFrontUpwards from '../../../../assets/atlantis-front-upwards.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp&useResponsiveLoader=true';
import floorPlan01 from '../../../../assets/floor-plan-01.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp&useResponsiveLoader=true';

export const AboutProperty: React.FC<any> = (_props) => {
  return (
    <>
      <Helmet>
        <title>The Property</title>
      </Helmet>
      <Heading level={HeadingLevel.H1}>The Property</Heading>
      <img 
        src={((atlantisFrontUpwards.src) as any)} 
        srcSet={atlantisFrontUpwards.srcSet}
        placeholder={atlantisFrontUpwards.placeholder}
        alt="Atlantis Front"
        className="mb-5" />
      <p className={styles['p']}>
        Built in 1975, at roughly 247 feet tall, the Atlantis is one of the <a href="https://www.emporis.com/statistics/tallest-buildings/city/102627/ocean-city-md-usa" target={'_blank'} rel={'noopener noreferrer'}>top 10<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> tallest buildings in Ocean City, Maryland offering co-owners and guests views of both the ocean and the bay.<br/><br/>

        The design and supervising architects,  Meyers & D'Aleo, Inc. designed the 21 story building comprised of 198 condo units. Sizes range from studios to 3 bedroom units, each with their own laundry in unit.<br/><br/> 

        Meyers & D'Aleo, Inc. are also architects for Antigua (86th street), the Golden Sands, the Oceana 1&amp;2 (83rd street) and Deer Point (94th street) (<a href="https://www.emporis.com/companies/292338/meyers-d-aleo-todd-inc-salisbury-ma-usa" target={'_blank'} rel={'noopener noreferrer'}>source<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a>). <br/><br/>

        Leo D'Aleo is well known for architecture around Ocean City and Baltimore. <br/><br/>

      </p>
      <Heading level={HeadingLevel.H1}>Floor Plans</Heading>
      <p className={styles['p']}>
        <ul className="list-disc ml-4">
          <li>
            <strong>#1</strong><br/>
            <img 
        src={((floorPlan01.src) as any)} 
        srcSet={floorPlan01.srcSet}
        alt="Atlantis Front"
        className="mb-5" />
            #1 Unit (2 bedroom w/ Beach & Bay Views - window in kitchen<br/>
            1 with bay view  (curved window) / 1 beach view + curved window
          </li>
          <li>
            <strong>#2</strong><br/>
            studio - with curved beach window
          </li>
          <li>
            <strong>#3,4,8,9</strong><br/>
            1 bed with + connect to balcony (beach view)<br/>
            1 bed with bay view
          </li>
          <li>
            <strong>#5,7</strong><br/>
            1bedroom but can be converted to 2 bedrooms (same as 3,4,8,9)<br/>
            angled bay side room/hallway entrance
          </li>
          <li>
            <strong>#6</strong><br/>
            #6 unit (2 bedroom with panoramic beach view)
          </li>
          <li>
            <strong>#10</strong><br/>
            (3bedroom)<br/>
            The “Royal Atlantis” 1315 SQFT
          </li>
        </ul>
      </p>





      </>
    )
}