import { Helmet } from 'react-helmet';
import { HashLink as Link } from 'react-router-hash-link';
import { Heading, HeadingLevel } from '../../../ui/atoms/heading';
import styles from './visiting-transportation.module.css';
import SecurityOffice from '../../../../assets/security-office.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=1216&format=webp&useResponsiveLoader=true';

export const VisitingCheckIn: React.FC<any> = (_props) => {
  const scrollWithOffset = (el:HTMLElement) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -85; 
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <>
      <Helmet>
        <title>Checking in</title>
      </Helmet>
      <div className={styles['container']}>
        <Heading level={HeadingLevel.H1}>Checking in at the Atlantis:</Heading>

        <div>
          When first arriving at the Atlantis, check-in at the Security Office before going to your unit or parking your vehicle.<br/><br/>
          
          The staff at the security office will assist you in obtaining a <b>cart</b> and a <b>parking pass</b>.<br/><br/>

          There may be a wait at the security office during busy check-in times, <i>having your credit card handy</i> for payment and cart reservation can help make the process more efficient.<br/><br/>

          <div className="space-y-5">
            <article>
              <Heading level={HeadingLevel.H4}>Registration and Parking</Heading>
              <p>
                <ul className="list-disc ml-5 mb-8">
                  <li><span className="font-semibold mr-2">Fee :</span>$xx (includes 1 parking pass)</li>
                  <li><span className="font-semibold mr-2">Payment Method :</span>Credit Card Only (no cash)</li>
                  <li><span className="font-semibold mr-2">Additional Parking :</span> $xx/week or $xx/day (for registered guests, if space permits)</li>
                </ul>
                
                Any vehicles wishing to park at the Atlantis require a parking pass displayed on the dashboard.<br/>

                <Link to={'/visiting/rules#registration-parking'} smooth scroll={scrollWithOffset}>More Details</Link>
              </p>
            </article>

            <article>
              <Heading level={HeadingLevel.H4}>Carts</Heading>
              <p>
                Carts make transporting luggage, groceries, and other items to your unit a breeze.<br/>
                Visitors must leave either their ID or a credit card with security in order to check out a cart. After the cart is returned, the card will be returned to the visitor. <br/>
                This policy has been put in place to encourage carts are returned in a timely manner.<br/>
                <Link to={'/visiting/rules#luggage-carts'} smooth scroll={scrollWithOffset}>Learn more</Link>
              </p>
            </article>


            <figure className="relative md:px-52 mt-8">
              <img src={SecurityOffice.src}  srcSet={SecurityOffice.srcSet}  alt={`Location of Security Office`} className='' />
              <figcaption className="absolute bottom-0 z-90 bg-black/50 px-5 py-2 text-white font-small">
                Security Office - Registration Location
              </figcaption>
            </figure>

          </div>
          




          
        </div>
      </div>
    </>
  )
}
