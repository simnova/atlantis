import { Helmet } from "react-helmet"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"
import styles from './about-ownership.module.css'; 
import { BiLinkExternal } from "react-icons/bi";



export const AboutOwnership: React.FC<any> = (_props) => {
  return (
    <>
      <Helmet>
        <title>Ownership</title>
      </Helmet>
      <Heading level={HeadingLevel.H1}>Ownership at the Atlantis:</Heading>
      <p>
        Whether you are looking for an <strong>investment property</strong>, a <strong>personal summertime getaway</strong> or a <strong>new place to call home</strong>, learn why Atlantis may be for you.<br/><br/>
      </p>

      <div className={['space-y-5', styles['container']].join(' ') }>

        <article>
            <Heading level={HeadingLevel.H5}>Your Next Investment Property</Heading>
            <p> 
                Offering investment property owners a seasonal income stream, with high demand in the summer season.<br/><br/>
                
                With recent public and private strategic investments to attract visitors to Ocean City year-round the potential for future year-round income exists. <br/><br/>

                The area provides local full-service rental services attractive to those seeking a more passive income stream. Coupled with the full-time security and maintenance staff at the Atlantis, the property offers a unique opportunity for owners to generate income while they are away.

                <ul>
                    <li><a href="https://oceancitymd.gov/oc/departments/planning-community-development/comprehensive-plan/" target="_blank" rel="noreferrer">Ocean City Comprehensive Plan <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a></li>
                    <li><a href="https://ocdc.org/"  target="_blank" rel="noreferrer">Ocean City Development Corporation <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a></li>
                </ul>
            </p>
        </article>
        <article>
            <Heading level={HeadingLevel.H5}>Your Personal Summertime Getaway</Heading>
            <p> 
                The Atlantis is a great place to spend your summertime. <br/><br/>
            
                The security and maintenance staff at the Atlantis will help keep your property safe and maintained when you are not there. <br/><br/>
            </p>
        </article>
        <article>
            <Heading level={HeadingLevel.H5}>Your New Home</Heading>
            <p> 
                The Atlantis is a great place to call home. <br/><br/>

                The building of the Atlantis remains staffed and operational year round helping to keep you safe and available to address your needs. <br/><br/>

                With 2 grocery stores less than a mile away, countless restaurants and bars, and a wide variety of amenities, the Atlantis is a great place to call home.
            </p>
        </article>


      </div>
    </>
  )
}
