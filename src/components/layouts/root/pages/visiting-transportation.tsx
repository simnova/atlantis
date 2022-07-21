import { Heading, HeadingLevel } from '../../../ui/atoms/heading';
import { AiOutlineGlobal, AiOutlineEnvironment } from 'react-icons/ai';
import styles from './visiting-transportation.module.css'; 
import { Helmet } from 'react-helmet';

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
              <li>Avis: 410-742-8566</li>
              <li>Enterprise: 410-677-3810</li>
              <li>Taxi / Limo Service: 410-422-1479</li>
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

        <Heading level={HeadingLevel.H1}>Getting around Ocean City:</Heading>

        <Heading level={HeadingLevel.H4}>Beach Bus</Heading>
        <div>
          $3.00 per person day pass<br/>
          <a href="https://oceancitymd.gov/oc/departments/public-works/ocean-city-beach-bus/"  target="_blank" rel="noreferrer">Learn More</a><br/>
          <a href="https://transloc.com/app/" target="_blank" rel="noreferrer">Download App</a> for Real-time bus locations<br/>
        </div>
      </div>
    </>
  )   
}