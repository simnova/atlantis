import { Helmet } from "react-helmet"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"

export const ExploreEvents: React.FC<any> = (_props) => {
    return (
      <>
        <Helmet>
          <title>Events</title>
        </Helmet>
        <Heading level={HeadingLevel.H1}>Events</Heading>
        <p>
        Ocean City is not just a summer destination!  The town of Ocean City hosts [many exciting events all year round](https://oceancitymd.gov/oc/departments/special-events/). 
        https://www.ococean.com/events/all-events

Here are just some of the fun events planned for Fall! [https://www.ococean.com/events/fall-events](https://www.ococean.com/events/fall-events)


Performing Arts:

https://ocmdperformingartscenter.com/upcoming-events
        </p>
        

      </>
    )
  }

