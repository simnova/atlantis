import { Helmet } from "react-helmet"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"

export const ExploreActivities: React.FC<any> = (_props) => {
    return (
      <>
        <Helmet>
          <title>Activities</title>
        </Helmet>
        <Heading level={HeadingLevel.H1}>Activities</Heading>
        <div className="mb-8 italic text-sm">Curated by Atlantis Co-Owners and Staff</div>
        
        

      </>
    )
  }

