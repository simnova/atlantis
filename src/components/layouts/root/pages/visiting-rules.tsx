import { Heading, HeadingLevel } from '../../../ui/atoms/heading';
import { BiLinkExternal } from 'react-icons/bi';
import styles from './visiting-rules.module.css';
import { Helmet } from 'react-helmet';

export const VisitingRules: React.FC<any> = (_props) => {
  return (
    <>
      <Helmet>
        <title>Rules</title>
      </Helmet>
      <div className={styles['container']}>
        <Heading level={HeadingLevel.H1}>Rules and Regulations</Heading>
        <h1>Summary of Rules / Policies</h1>
        <p>Not meant to replace the detailed polices found in co-owner handbook.</p>
        <br/>

        <div className="space-y-5">

          <article>
            <Heading level={HeadingLevel.H5} id="registration-parking">Registration and Parking:</Heading>
            <p>
              <ul className="list-disc ml-5 mb-8">
                <li>Registration form needs to list all persons occupying the unit </li>
                <li><span className="font-semibold mr-2">Registration Location:</span>Security Office on ground floor</li>
              </ul>
              
              Registration Charge: (includes one Parking Permit)<br/>
              <ul className="list-disc ml-5 mb-8">
                <li><span className="font-semibold mr-2">Amount :</span>$40.</li>
                <li><span className="font-semibold mr-2">Payment Method :</span>Credit Card Only (No cash)</li>
                <li><span className="font-semibold mr-2">Additional Parking :</span>If space permits $40/week or $10/day  (for registered guests, if space permits)</li>
              </ul>
          
          
              
              No boats, trailers, jet skis or motor homes.<br/>

              <strong>Additional Parking</strong> across the street by the Library (100th Street Municipal lot):<br/>
              <ul className="list-disc ml-5 mb-8">
                <li><span className="font-semibold mr-2"><a href="https://www.ococean.com/parking-information" target={'_blank'} rel={'noopener noreferrer'}>Vehicle Parking<BiLinkExternal className="align-text-bottom inline-block mb-px"/></a> :</span>$40/week - $10/day<br/></li>
                <li><span className="font-semibold mr-2"><a href="https://oceancitymd.gov/oc/ocean-city-parking/#trailer-oversized-vehicle-parking" target={'_blank'} rel={'noopener noreferrer'}>Boat Trailer & Oversized Vehicle Parking<BiLinkExternal className="align-text-bottom inline-block mb-px"/></a> :</span>$50/week - $10/day<br/></li>
                <li><span className="font-semibold mr-2"><a href="https://oceancitymd.gov/oc/electric-vehicle-charging-stations/" target={'_blank'} rel={'noopener noreferrer'}>EV Charging<BiLinkExternal className="align-text-bottom inline-block mb-px"/></a></span>is available</li>
              </ul>

       
              

            </p>
          </article>

          <article>
            <Heading level={HeadingLevel.H5} id="luggage-carts">Luggage Carts</Heading>
            <p>
                <ul className="list-disc ml-5 mb-8">
                  <li><span className="font-semibold mr-2">Quantity :</span>One per unit </li>
                  <li>Do not keep in unit, return once finished using it.</li>
                  <li><span className="font-semibold mr-2">Carts available at :</span>Ground level security office</li>
                </ul>
                Additional Details:<br/>
                Carts make transporting luggage, groceries, and other items to your unit a breeze.<br/>
                Visitors must leave either their ID or a credit card with security in order to check out a cart. After the cart is returned, the card will be returned to the visitor. <br/>
                Carts may not be left in the unit overnight. <br/>
                This policy has been put in place to encourage carts are returned in a timely manner.
            </p>
          </article>

          <article>
            <Heading level={HeadingLevel.H5} id="trash-chute">Trash Chute:</Heading>
            <p>
              <ul className="list-disc ml-5 mb-8">
                <li><span className="font-semibold mr-2">Hours of operation :</span> 8:00 AM to 10:00 PM</li>
                <li><span className="font-semibold mr-2">Location :</span> North end of each floor of the building</li>
                <li><span className="font-semibold mr-2">Permissible items :</span> Bagged items only, no larger than standard kitchen trash bag</li>
              </ul>
              
              <span className="font-semibold">Use dumpsters instead for</span>: (located at ground level)<br/>
              <ul className="list-disc ml-5 mb-8">
                <li>Pizza and other large boxes - boxes should be broken down.</li>
                <li>Larger or heavy items, such as a broken beach chair / crab shells.</li>
              </ul>

              Additional Details:<br/>
              If a co-owner is renovating their property, they should consult the co-owner handbook for more details on how to dispose of these materials.
            </p>
          </article>

          <article>
            <Heading level={HeadingLevel.H5} id="dog-lot">Pets / Dog Lot:</Heading>
            <p>
              <ul className="list-disc ml-5 mb-8">
 
                <li><span className="font-semibold mr-2">Location :</span> North-east corner of property.</li>
              </ul>
              Additional Details:<br/>
              After using the pet area please be sure to pick up your “fur baby's” messes.
              Please keep your pups leashed at all times and, be VERY MINDFUL when exiting the elevators/lobbies with your dogs. 
              
              Other dogs may be at your elevator stop and, fights can happen. 
              Dogs that exhibit aggression towards people cannot be tolerated.
            </p>
          </article>

          <article>
            <Heading level={HeadingLevel.H5} id="pool">Pool:</Heading>
            <p>
              <ul className="list-disc ml-5 mb-8">
                <li><span className="font-semibold mr-2">Hours :</span>9:00AM - 10:00PM</li>
                <li><span className="font-semibold mr-2">Adult Swim :</span>9:00AM - 10:00AM</li>
                <li>No splashing, diving</li>
                <li>No yelling, no loud music (use headphones instead).</li>
                <li>No balls/toys.</li>
                <li>No glass containers.</li>
                <li>Under 16 is not permitted without a parent or guardian</li>
                <li>Please rinse off prior to entering the pool if you were at the beach. Excess sand can clog the filter and cause the pool to close</li>
              </ul>
            </p>
          </article>

          <article>
            <Heading level={HeadingLevel.H5} id="bicycles">Bicycles:</Heading>
            <p>
              <ul className="list-disc ml-5 mb-8">
                <li>Prohibited on elevators during summer months.</li>
                <li>Bike racks a provided at ground level under northmost corner of building, locks recommended.</li>
              </ul>
            </p>
          </article>

          <article>
            <Heading level={HeadingLevel.H5} id="skateboards">Skateboards, Roller Skates, Roller Blades:</Heading>
            <p>
              <ul className="list-disc ml-5 mb-8">
                <li>Prohibited in Ocean City except at skate park from April 1st to October 1st of each year 
                  [<a href="https://oceancitymd.gov/oc/departments/recreation-parks/skate-park/rules/" target={'_blank'} rel={'noopener noreferrer'}>source 1<BiLinkExternal className="align-text-bottom inline-block mb-px"/></a>]
                  [<a href="https://library.municode.com/md/ocean_city/codes/code_of_ordinances?nodeId=PTIICOOR_CH90TRVE_ARTVBISKSICO_S90-195OPSK" target={'_blank'} rel={'noopener noreferrer'}>source 2<BiLinkExternal className="align-text-bottom inline-block mb-px"/></a>] 
                .</li>
              </ul>
            </p>
          </article>

          <article>
            <Heading level={HeadingLevel.H5} id="smoking">Smoking</Heading>
            <p>
              This is a NON-SMOKING facility including balconies. Evidence of smoking in units will result in additional charges. Smoking is permitted on the ground floor only in designated smoking areas. We ask that you discard your cigarette butts only in containers reserved for smoking.
            </p>
          </article>

          <article>
            <Heading level={HeadingLevel.H5} id="furnishings">Furnishings</Heading>
            <p>
              Your condominium unit is privately owned; therefore, we ask that you do not abuse the furnishings or unit. Please do not rearrange furnishings or bring balcony furniture to the beach.
            </p>
          </article>

          <article>
            <Heading level={HeadingLevel.H5} id="safety">Safety</Heading>
            <p>
              NO WEAPONS OR FIREARMS ARE ALLOWED ON THE PROPERTY OR IN THE UNITS
            </p>
          </article>

          <article>
            <Heading level={HeadingLevel.H5} id="damages">Damages</Heading>
            <p>
              We ask that our guests report any breakage or damage and settle such matters before your departure. All rental units are checked carefully after each guest departs and any unsettled breakage or damages beyond normal wear and tear may result in additional charges. Also if excessive cleaning is required this will be considered damage.
            </p>
          </article>

          <article>
            <Heading level={HeadingLevel.H5} id="lokout">Lost Keys / Lockout</Heading>
            <p>
              Keys:<br/>
              <ul className="list-disc ml-5 mb-8">
                <li>Used to access unit,  ground floor elevator lobby and bathrooms. </li>
                <li>Contact your rental agent if keys are non functional.</li>
              </ul>


              <span className='font-semibold'>Lockout Fees:</span><br/>
              A nominal fee is charged to regain access to the unit if you have locked yourself out - see security for assistance. (Only those who are on unit registration will be granted access.)<br/>
              <ul className="list-disc ml-5 mb-8">
                <li><span className="font-semibold mr-2">8:00 AM - 4:30 PM :</span>$10</li>
                <li><span className="font-semibold mr-2">4:30 PM - Midnight :</span>$20</li>
                <li><span className="font-semibold mr-2">Midnight - 8:00 AM :</span>$40</li>
              </ul>
              

            </p>
          </article>

          <article>
            <Heading level={HeadingLevel.H5} id="damages">Balconies</Heading>
            <p>
              <ul className="list-disc ml-5 mb-8">
                <li>No bird feeding.</li>
                <li>No cooking or grilling.</li>
              </ul>
            </p>
          </article>


          <article>
            <Heading level={HeadingLevel.H5} id="damages">Cameras</Heading>
            <p>
              <ul className="list-disc ml-5 mb-8">
                <li>Cameras or digital video cameras are operating 24/7 for your protection. These cameras are located through out the building and common areas.</li>
              </ul>
            </p>
          </article>



        </div>
      </div>
    </>
  )
}