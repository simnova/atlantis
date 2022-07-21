import { Helmet } from "react-helmet"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"

export const Contact: React.FC<any> = (_props) => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Heading level={HeadingLevel.H1}>Contacting the Atlantis:</Heading>

      <div>
        Office Hours are from 8:00am to 4:30pm Monday through Friday.<br/>
        Email: <a href="mailto:atlantisocmd@comcast.net">atlantisocmd@comcast.net</a><br/>
        Phone: <a href="tel:+1-410-524-9100">410-524-9100</a><br/>
      </div>
    </>
  )
}