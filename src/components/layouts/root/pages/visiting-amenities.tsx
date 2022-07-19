import { Heading, HeadingLevel } from '../../../ui/atoms/heading';
import { HashLink as Link } from 'react-router-hash-link';
import { BiLinkExternal } from 'react-icons/bi';
import styles from './visiting-amenities.module.css';

export const VisitingAmenities: React.FC<any> = (_props) => {
  const scrollWithOffset = (el:HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -85; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <>
      <div className={styles['container']}>
        <Heading level={HeadingLevel.H1}>Amenities:</Heading>

        <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div>
                <Heading level={HeadingLevel.H4}>Parking:</Heading>
                With xx parking spots, xx handicap spots, there is ample parking space for all guests.<br/>
                <Link to={'/visiting/rules#parking-permits'} smooth scroll={scrollWithOffset}>Learn more</Link>
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Outdoor Showers:</Heading>
                Located conveniently by the pool, outdoor showers are available for all guests to rinse off themselves and their beach equipment before entering the building or pool.<br/>
            </div>

            
            <div>
                <Heading level={HeadingLevel.H4}>Ground Floor Bathrooms/Showers:</Heading>
                Located in the ground floor of the building, there are bathrooms and showers for all guests.<br/>
                Use your room key to access the bathrooms.
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Dog Lot (Co-Owners Only):</Heading>
                Located conveniently by the pool, the dog lot is a secure and easy way to allow your dogs to relieve themselves.<br/>
                <Link to={'/visiting/rules#dog-lot'} smooth scroll={scrollWithOffset}>Learn more</Link> 
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Pool:</Heading>
                Located conveniently by the pool, outdoor showers.<br/>
                <Link to={'/visiting/rules#pool'} smooth scroll={scrollWithOffset}>Learn more</Link> 
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Bike Racks:</Heading>
                Located at ground level under the north most corner of the building.<br/>
                <Link to={'/visiting/rules#bicycles'} smooth scroll={scrollWithOffset}>Learn more</Link> 
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Water / Ice Machine:</Heading>
                Located conveniently by the pool, outdoor showers . 
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Snack Shack:</Heading>
                Located in the security office: <br/>
                $2.00 - 20oz bottles of water and soda <br/>
                $1.00 - bag of chips
            </div>


            <div>
                <Heading level={HeadingLevel.H4}>Beach:</Heading>
                Ocean City Beaches are free to the public (no beach passes required).<br/>

                Bonfires<br/>
                Enjoy the beach at night too! You must <a href="https://ocbonfires.com/" target={'_blank'} rel={'noopener noreferrer'}>register pay $75 fee online<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> in order to have a bonfire.
            </div>
        </div>
      </div>
    </>
  )   
}