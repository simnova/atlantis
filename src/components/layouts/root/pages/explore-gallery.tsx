import { Helmet } from "react-helmet"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"

export const ExploreGallery: React.FC<any> = (_props) => {
    return (
      <>
        <Helmet>
          <title>Gallery</title>
        </Helmet>
        <Heading level={HeadingLevel.H1}>Gallery</Heading>
        

      </>
    )
  }

