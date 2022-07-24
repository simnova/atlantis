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

        <article>
          <Heading level={HeadingLevel.H5} id="restaurants">Annual Events:</Heading>
          <div className="ml-3 mb-2 text-sm">
            Ocean City is not just a summer destination!  The town of Ocean City hosts many events all year round.  Check out the events below for more information.<br/>
            Additional Resources: 
              [<a href="https://www.ococean.com/events/all-events"  target="_blank" rel="noreferrer">OC Ocean - Event Listing <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a>]
              [<a href="https://www.oceancity.com/events/"  target="_blank" rel="noreferrer">OceanCity.com - Event Listing <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a>]
          </div>
          <div>
            <ul className="list-disc ml-5 mb-8">
              <li><span className="font-semibold mr-2"><a href="https://oceancitymd.gov/oc/departments/special-events/springfest/"  target="_blank" rel="noreferrer">Springfest <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> Early May</li>
              <li><span className="font-semibold mr-2"><a href="https://oceancitymd.gov/oc/departments/special-events/artx/"  target="_blank" rel="noreferrer">ArtX <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> Late August</li>
              <li><span className="font-semibold mr-2"><a href="https://oceancitymd.gov/oc/departments/special-events/octoberfest/"  target="_blank" rel="noreferrer">O.C.toberfest <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> Late October</li>
              <li><span className="font-semibold mr-2"><a href="https://oceancitymd.gov/oc/departments/special-events/sunfest/"  target="_blank" rel="noreferrer">Sunfest <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> Late October</li>
              <li><span className="font-semibold mr-2"><a href="https://oceancitymd.gov/oc/departments/special-events/winterfest/"  target="_blank" rel="noreferrer">Winterfest <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> Mid Nov to End of December </li>
              <li><span className="font-semibold mr-2"><a href="https://oceancitymd.gov/oc/departments/special-events/christmas-parade/"  target="_blank" rel="noreferrer">Christmas Parade <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> Early December</li>
            </ul>
          </div>
        </article>

        <article>
          <Heading level={HeadingLevel.H5} id="restaurants">Summertime Events:</Heading>
          <div className="ml-3 text-sm">
          </div>
          <div>
            <ul className="list-disc ml-5 mb-8">
              <li><span className="font-semibold mr-2"><a href="https://oceancitymd.gov/oc/departments/special-events/oc-beach-dance-party/"  target="_blank" rel="noreferrer">Sunset Park Party Nights <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> <b>Monday Evenings</b> from July 11  – August 29, 2022 at Caroline Street Stage</li>
              <li><span className="font-semibold mr-2"><a href="https://oceancitymd.gov/oc/departments/special-events/sunset-park-party-nights/"  target="_blank" rel="noreferrer">Sunset Park Party Nights <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> <b>Thursday Evenings</b> from July 7, 2022 – August 25, 2022 at South Division Street & The Bay</li>
              <li><span className="font-semibold mr-2"><a href="https://oceancitymd.gov/oc/departments/special-events/sundaes-in-the-park/"  target="_blank" rel="noreferrer">Sundaes in The Park <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> <b>Sunday Evenings</b> from June 12 – September 4, 2022 at Northside Park</li>
            </ul>
          </div>
        </article>

      </div>
    </>
  )
}