import { Helmet } from "react-helmet"
import { BiLinkExternal } from "react-icons/bi"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"
import styles from './explore-events.module.css'; 

export const ExploreEvents: React.FC<any> = (_props) => {
    return (
      <>
        <Helmet>
          <title>Events</title>
        </Helmet>
        <Heading level={HeadingLevel.H1}>Events</Heading>
        <div className={['space-y-5', styles['container']].join(' ') }>
        Ocean City is not just a summer destination!  The town of Ocean City hosts 
        <a href="https://oceancitymd.gov/oc/departments/special-events/"  target="_blank" rel="noreferrer">many exciting events all year round <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> .
    
        
       

Here are just some of the fun events planned for Fall! 

<a href="https://www.ococean.com/events/fall-events"  target="_blank" rel="noreferrer">Fall Events <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> 

Performing Arts:
https://www.ococean.com/events/all-events
https://ocmdperformingartscenter.com/upcoming-events
        </div>
        

      </>
    )
  }

