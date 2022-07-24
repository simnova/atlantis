import { Helmet } from "react-helmet"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"

export const ExploreMaps: React.FC<any> = (_props) => {
    return (
      <>
        <Helmet>
          <title>Area Maps</title>
        </Helmet>
        <Heading level={HeadingLevel.H1}>Area Maps</Heading>
        

      </>
    )
  }

