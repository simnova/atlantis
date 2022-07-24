import { Helmet } from "react-helmet"
import { AiOutlineEnvironment } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"
import styles from './explore-attractions.module.css'; 

export const ExploreAttractions: React.FC<any> = (_props) => {
    return (
      <>
        <Helmet>
          <title>Attractions</title>
        </Helmet>
        <Heading level={HeadingLevel.H1}>Attractions</Heading>
        <div className="mb-8 italic text-sm">Curated by Atlantis Co-Owners and Staff</div>
        <div className={['space-y-5', styles['container']].join(' ') }>
          <article>
            <Heading level={HeadingLevel.H6}>Must See Activities:</Heading>
            <p className="mb-5">
              Explore all that Ocean City has to offer!
            </p>

            <div className="ml-3">
              <div className="font-semibold">The Boardwalk</div>
              <div className="ml-3 text-sm">
                Take a stroll on our 3-mile, <a href="https://www.travelchannel.com/interests/beaches/articles/americas-favorite-boardwalks"  target="_blank" rel="noreferrer">award-winning <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> boardwalk! <br/><br/>
    
                There are plenty of restaurants to grab a bite.  Don't want to miss a second of the action on the boardwalk?  Grab a slice of pizza from The Dough Roller, a bucket of Thrasher's fries, or a cone from Kohr Bros. or Dumser's Dairyland.  Or choose to be seated in one of the many restaurants along the boardwalk.<br/><br/>
                
                Take the kids to one of several amusement areas for a variety of rides and games.<br/><br/>
                
                Be sure to stop by one of the countless shops to grab a souvenir before you leave!<br/><br/>
              </div>
            </div>
            <div className="ml-3">
              <div className="font-semibold">Water Sports:</div>
              <div className="ml-3 text-sm">
                Boat rides<br/>
                Boat/jet ski/kayak rentals
              </div>
              <ul className="list-disc ml-5 mb-8">
                { /* Listing of local destinations nearby 10300 Coastal Hwy, Ocean City, MD 21842  */ }
                <li>
                  <span className="font-semibold mr-2"><a href="https://berlinmainstreet.com/"  target="_blank" rel="noreferrer">Berlin, MD <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                   (14.6 mi)
                  <a href="https://goo.gl/maps/JGLqqZMYToLHDZhZ9" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  The town of Berlin, MD is a short drive away and is home a number of shops and restaurants and retains a small-town feeling.
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.nps.gov/asis/index.htm"  target="_blank" rel="noreferrer">Assateague Island <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  (22.6 mi)
                  <a href="https://goo.gl/maps/5KoRLRP4LA54weqx7" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  Assateague Island is a small island in the middle of the Atlantic Ocean. It is a great place to visit for a day or two.                
                </li>
              </ul>
            </div>
            <div className="ml-3">
              <div className="font-semibold">Amusements/Water Parks/Go-Karts:</div>
              <div className="ml-3 text-sm">
              - Looking for a fun outing for the family? Visit one of the Ocean City’s amusement parks. Jolly Roger has locations on 30th Street as well as the pier at the southern end of the boardwalk.<br/>
              - Visit Jolly Roger’s Splash Mountain - the largest waterpark on the Eastern Shore - for hours of family fun!<br/>
              - There are several options for go-karting in the area, including: Speedworld Go-Karts, Grand Prix Amusements & ProTrack, and Baja Amusements, among many others.<br/>
      
              </div>
              <ul className="list-disc ml-5 mb-8">
                { /* Listing of local destinations nearby 10300 Coastal Hwy, Ocean City, MD 21842  */ }
                <li>
                  <span className="font-semibold mr-2"><a href="https://berlinmainstreet.com/"  target="_blank" rel="noreferrer">Berlin, MD <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                   (14.6 mi)
                  <a href="https://goo.gl/maps/JGLqqZMYToLHDZhZ9" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  The town of Berlin, MD is a short drive away and is home a number of shops and restaurants and retains a small-town feeling.
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.nps.gov/asis/index.htm"  target="_blank" rel="noreferrer">Assateague Island <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  (22.6 mi)
                  <a href="https://goo.gl/maps/5KoRLRP4LA54weqx7" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  Assateague Island is a small island in the middle of the Atlantic Ocean. It is a great place to visit for a day or two.                
                </li>
              </ul>
            </div>

            <div className="ml-3">
              <div className="font-semibold">Local Destinations:</div>
              <ul className="list-disc ml-5 mb-8">
                { /* Listing of local destinations nearby 10300 Coastal Hwy, Ocean City, MD 21842  */ }
                <li>
                  <span className="font-semibold mr-2"><a href="https://berlinmainstreet.com/"  target="_blank" rel="noreferrer">Berlin, MD <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                   (14.6 mi)
                  <a href="https://goo.gl/maps/JGLqqZMYToLHDZhZ9" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  The town of Berlin, MD is a short drive away and is home a number of shops and restaurants and retains a small-town feeling.
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.nps.gov/asis/index.htm"  target="_blank" rel="noreferrer">Assateague Island <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  (22.6 mi)
                  <a href="https://goo.gl/maps/5KoRLRP4LA54weqx7" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  Assateague Island is a small island in the middle of the Atlantic Ocean. It is a great place to visit for a day or two.                
                </li>
              </ul>
            </div>
            <div  className="ml-3">
              <div className="font-semibold" id="golf">Golfing:</div>
              <ul className="list-disc ml-5 mb-8">
                <li>
                  <span className="font-semibold mr-2"><a href="http://www.lighthousesound.com/"  target="_blank" rel="noreferrer">Links At Lighthouse Sound <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Bishopville, MD (6 mi)
                  <a href="https://goo.gl/maps/2MdCMpHVxrs7cWA67" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.oceanresortsgolfclub.com/"  target="_blank" rel="noreferrer">Ocean Resorts Golf Club <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Berlin, MD (9.9 mi)
                  <a href="https://goo.gl/maps/UFozLVR4JXfGVdF5A" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.eagleslandinggolf.com/"  target="_blank" rel="noreferrer">Eagle's Landing <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Berlin, MD (10.3 mi)
                  <a href="https://g.page/ealeslandinggolfcourseoc?share" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.saltpondgolf.com/"  target="_blank" rel="noreferrer">Salt Pond Golf Club <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Bethany Beach, DE (11.3 mi)
                  <a href="https://goo.gl/maps/Trt1XVocAAAvijz36" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.oceanpinesgolf.org/golf"  target="_blank" rel="noreferrer">Ocean Pines Golf Club <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Ocean Pines, MD (11.4 mi)
                  <a href="https://goo.gl/maps/hHbSbsnWQVvBrTmd9" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="http://www.beartrapdunes.com/"  target="_blank" rel="noreferrer">Bear Trap Dunes <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Ocean View, DE (12.2 mi)
                  <a href="https://goo.gl/maps/xV9Da74hzdJGous66" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://glenriddlegolf.com/"  target="_blank" rel="noreferrer">Glen Riddle Golf Club <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Berlin, MD (12.3 mi)
                  <a href="https://goo.gl/maps/n2rnzfXe3ex4REkL9" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.riverrungolf.com/"  target="_blank" rel="noreferrer">River Run Golf Club <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Berlin, MD (10.5 mi)
                  <a href="https://goo.gl/maps/hAdKZ51ddgRYu1fA7" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li> 
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.baywoodgreens.com/"  target="_blank" rel="noreferrer">Rum Pointe Seaside Golf Links <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Berlin, MD (14.9 mi)
                  <a href="https://goo.gl/maps/KVmGZWY9fWRJAa6cA" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://oceancitygolfclub.com/"  target="_blank" rel="noreferrer">Ocean City Golf Club <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Berlin, MD (15.5 mi)
                  <a href="https://goo.gl/maps/STzucrfU5W3mC27RA" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://nutterscrossing.com/"  target="_blank" rel="noreferrer">Nutters Crossing Golf Club <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Salisbury, MD (32.7 mi)
                  <a href="https://goo.gl/maps/Atmqp4b4Ddhu65fY6" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.baywoodgreens.com/"  target="_blank" rel="noreferrer">Ocean City Golf Club <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Long Neck, DE (34 mi)
                  <a href="https://goo.gl/maps/2MdCMpHVxrs7cWA67" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.heritageshores.com/the-course"  target="_blank" rel="noreferrer">Heritage Shores <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Bridgeville, DE (47.2 mi)
                  <a href="https://goo.gl/maps/geChyPdZ8nG3RKZD7" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>

                
                

                
                
                

                
                

                
                

              </ul>
            </div>
          </article>
        </div>


      </>
    )
  }

