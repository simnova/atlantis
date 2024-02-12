import { Heading, HeadingLevel } from '../../../ui/atoms/heading';
import { AiOutlineGlobal, AiOutlineEnvironment } from 'react-icons/ai';
import styles from './visiting-transportation.module.css'; 
import { Helmet } from 'react-helmet';
import { BiLinkExternal } from 'react-icons/bi';

export const VisitingTransportation: React.FC<any> = (_props) => {
  return (
    <>
      <Helmet>
        <title>Transportation</title>
      </Helmet>
      <div className={styles['container']}>
        <Heading level={HeadingLevel.H1}>Getting to the Atlantis:</Heading>

        <Heading level={HeadingLevel.H4}>Airports:</Heading>

        <Heading level={HeadingLevel.H5}>Salisbury Regional Airport (American Airlines)</Heading>
        <div className="space-y-3">
          <div className="font-medium"> 30miles away / 40 minute drive</div>  
          <div>Airport Code: SBY</div>
          <div className="flex flex-row space-x-3">
            <a href="https://www.flysbyairport.com/" target="_blank" rel="noreferrer" style={{display:'flex', alignItems:'center'}}><AiOutlineGlobal style={{marginRight:'3px'}} /> Website</a> 
            <a href="https://goo.gl/maps/YBmhhLBD4pUyiKvTA" target="_blank" rel="noreferrer" style={{display:'flex', alignItems:'center'}}><AiOutlineEnvironment  style={{marginRight:'3px'}}  /> Directions</a> 
          </div>
          <div>
            Rental cars available at airport:
            <ul className="list-disc ml-5 mb-8">
              <li>Avis: <a href="tel:+01-410-742-8566" title="Phone">410-742-8566</a></li>
              <li>Enterprise: <a href="tel:+01-410-677-3810" title="Phone">410-677-3810</a></li>
              <li>Taxi / Limo Service: <a href="tel:+01-410-422-1479" title="Phone">410-422-1479</a></li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div>
            <Heading level={HeadingLevel.H6}>Philadelphia International Airport</Heading>
            <div className="space-y-2 mb-5">
              <div className="font-medium">133 miles away / 2.2hr+ drive</div>
              <div>Airport Code: PHL</div>
              <div className="flex flex-row space-x-3">
                <a href="https://www.phl.org/" target="_blank" rel="noreferrer" style={{display:'flex', alignItems:'center'}}><AiOutlineGlobal style={{marginRight:'3px'}} /> Website</a> 
                <a href="https://goo.gl/maps/BbMcb3SwUyRB4ukX9" target="_blank" rel="noreferrer" style={{display:'flex', alignItems:'center'}}><AiOutlineEnvironment  style={{marginRight:'3px'}}  /> Directions</a> 
              </div>
            </div>
          </div>
          <div>
            <Heading level={HeadingLevel.H6}>Baltimore Washington Airport</Heading>
            <div className="space-y-2 mb-5">
              <div className="font-medium">126 miles away / 2.5hr+ drive</div>
              <div>Airport Code: BWI</div>
              <div className="flex flex-row space-x-3">
                <a href="https://www.bwiairport.com/" target="_blank" rel="noreferrer" style={{display:'flex', alignItems:'center'}}><AiOutlineGlobal style={{marginRight:'3px'}} /> Website</a> 
                <a href="https://goo.gl/maps/9G7YNebvSU3AZymz7" target="_blank" rel="noreferrer" style={{display:'flex', alignItems:'center'}}><AiOutlineEnvironment  style={{marginRight:'3px'}}  /> Directions</a> 
              </div>
            </div>
          </div>
          <div>
            <Heading level={HeadingLevel.H6}>Ronald Reagan National Airport</Heading>
            <div className="space-y-2 mb-5">
              <div className="font-medium">143 miles away / 2.5hr+ drive</div>
              <div>Airport Code: DCA</div>
              <div className="flex flex-row space-x-3">
                <a href="https://www.flyreagan.com/" target="_blank" rel="noreferrer" style={{display:'flex', alignItems:'center'}}><AiOutlineGlobal style={{marginRight:'3px'}} /> Website</a> 
                <a href="https://goo.gl/maps/QsgACWjtH7hji4zq6" target="_blank" rel="noreferrer" style={{display:'flex', alignItems:'center'}}><AiOutlineEnvironment  style={{marginRight:'3px'}}  /> Directions</a> 
              </div>
            </div>         
          </div>
          <div>
            <Heading level={HeadingLevel.H6}>Atlantic City International Airport</Heading>
            <div className="space-y-2 mb-5">
              <div className="font-medium">90.3 miles away / 3hr+ drive</div>
              <div>Airport Code: ACY</div>
              <div className="flex flex-row space-x-3">
                <a href="https://www.sjta.com/acairport/about.asp" target="_blank" rel="noreferrer" style={{display:'flex', alignItems:'center'}}><AiOutlineGlobal style={{marginRight:'3px'}} /> Website</a> 
                <a href="https://goo.gl/maps/WuzpF9MqjDxjPb98A" target="_blank" rel="noreferrer" style={{display:'flex', alignItems:'center'}}><AiOutlineEnvironment  style={{marginRight:'3px'}}  /> Directions</a> 
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">

          <Heading level={HeadingLevel.H1}>Getting around Ocean City:</Heading>

          <div>
            <Heading level={HeadingLevel.H4}>Beach Bus</Heading>
            <div>
              $4.00 per person day pass: 
              <a href="https://oceancitymd.gov/oc/departments/public-works/ocean-city-beach-bus/" className="ml-1" target="_blank" rel="noreferrer">Learn More  <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a><br/>
              <a href="https://transloc.com/app/" target="_blank" rel="noreferrer">Download App <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> for Real-time bus locations<br/>
            </div>
          </div>

          <div>
            <Heading level={HeadingLevel.H4}>Taxi/Car Services</Heading>
            <div>
              Ocean City is home to many taxi and car services including 
              <a href="https://www.uber.com/" className="ml-1" target="_blank" rel="noreferrer">Uber <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> and
              <a href="https://www.lyft.com/" className="ml-1" target="_blank" rel="noreferrer">Lyft <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a>
              .

              <ul className="list-disc ml-5 mb-8">
                <li>
                  <a href="https://taxitaxioc.com/"  target="_blank" rel="noreferrer">Taxi Taxi OCMD <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a><br/>
                  Taxi Service: <a href="tel:+01-410-289-8989" title="Phone">410-289-8989</a><br/>
                  Shuttle Service: <a href="tel:+01-410-289-8686" title="Phone">410-289-8686</a> (for larger groups)<br/>
                </li>
              </ul>
            </div>
          </div>

        </div>
        

      </div>
    </>
  )   
}