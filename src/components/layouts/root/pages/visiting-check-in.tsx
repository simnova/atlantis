import { HashLink as Link } from 'react-router-hash-link';
import { Heading, HeadingLevel } from '../../../ui/atoms/heading';
import styles from './visiting-transportation.module.css';

export const VisitingCheckIn: React.FC<any> = (_props) => {
  const scrollWithOffset = (el:HTMLElement) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -85; 
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <>
      <div className={styles['container']}>
        <Heading level={HeadingLevel.H1}>Checking In at the Atlantis:</Heading>

        <div>
          When first arriving at the Atlantis, check-in at the Security Office before going to your unit or parking your vehicle.<br/><br/>
          
          The staff at the security office will assist you in obtaining a cart and a parking pass.<br/><br/>

          There may be a wait at the security office during busy check-in times, having your credit card handy for payment and cart reservation can help make the process more efficient.<br/><br/>

          <Heading level={HeadingLevel.H4}>Registration</Heading>
          <p>
            <ul className="list-disc ml-5 mb-8">
              <li><span className="font-semibold">Fee:</span>$40.</li>
              <li><span className="font-semibold">Payment Method:</span>Credit Card Only (No cash)</li>
              <li><span className="font-semibold">Effective Period:</span>May 1st to Sep 30th</li>
            </ul>
            
            Carts make transporting luggage, groceries, and other items to your unit a breeze.<br/>
            Visitors must leave either their ID or a credit card with security in order to check out a cart. After the cart is returned, the card will be returned to the visitor. 
            This policy has been put in place to encourage carts are returned in a timely manner.
            <Link to={'/visiting/rules#registration'} smooth scroll={scrollWithOffset}>Learn more</Link>
          </p>

          <Heading level={HeadingLevel.H4}>Carts</Heading>
          <p>
            Carts make transporting luggage, groceries, and other items to your unit a breeze.<br/>
            Visitors must leave either their ID or a credit card with security in order to check out a cart. After the cart is returned, the card will be returned to the visitor. 
            This policy has been put in place to encourage carts are returned in a timely manner.
            <Link to={'/visiting/rules#luggage-carts'} smooth scroll={scrollWithOffset}>Learn more</Link>
          </p>

          <Heading level={HeadingLevel.H4}>Parking Pass</Heading>
          <p>
            Any vehicles wishing to park at the Atlantis require a parking pass displayed on the dashboard.<br/>
            <Link to={'/visiting/rules#parking-permits'} smooth scroll={scrollWithOffset}>Learn more</Link>
            
            
          </p>
          
        </div>
      </div>
    </>
  )
}
