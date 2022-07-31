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
            <Heading level={HeadingLevel.H6}>Must See Attractions:</Heading>
            <p className="mb-5">
              Explore all that Ocean City has to offer!
            </p>

            <div className="ml-3">
              <div className="font-semibold">The Boardwalk</div>
              <div className="ml-3 text-sm">
                Take a stroll on our amazing 3-mile, boardwalk! <br/><br/>

                Don't just take our word for it..
                <ul className="list-disc ml-3">
                  <li><a href="https://www.fodors.com/news/photos/americas-12-greatest-boardwalks"  target="_blank" rel="noreferrer">Fodors <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> says that the OCMD boardwalk is in the top 12 in America. </li>
                  <li><a href="https://www.travelchannel.com/interests/beaches/articles/americas-favorite-boardwalks"  target="_blank" rel="noreferrer">The Travel Channel <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> says the the OCMD boardwalk is one of the top 5 in America (Actually #1). </li>
                </ul>
                <br/>
                
                
    
                There are plenty of restaurants to grab a bite.  Don't want to miss a second of the action on the boardwalk?  Grab a slice of pizza from The Dough Roller, a bucket of Thrasher's fries, or a cone from Kohr Bros. or Dumser's Dairyland.  Or choose to be seated in one of the many restaurants along the boardwalk.<br/><br/>
                
                Take the kids to one of several amusement areas for a variety of rides and games.<br/><br/>
                
                Be sure to stop by one of the countless shops to grab a souvenir before you leave!<br/><br/>
              </div>
            </div>

            <div className="ml-3">
              <div className="font-semibold">Live performances:</div>
              <div className="ml-3 text-sm">
                
              </div>
              <ul className="list-disc ml-5 mb-8">
                  <li>
                  <span className="font-semibold mr-2"><a href="https://ocmdperformingartscenter.com/upcoming-events"  target="_blank" rel="noreferrer">Ocean City Performing Arts Center<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  (3.7 mi)
                  <a href="https://goo.gl/maps/7fVWJd4gfQnzes7W8" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  Located in the Roland E. Powell Convention Center - this facility provides year round performances.           
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.freemanarts.org/events-tickets/upcoming-performances"  target="_blank" rel="noreferrer">Freeman Arts Pavilion<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  (7 mi)
                  <a href="https://g.page/freemanarts?share" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  National artists share the stage with local performers at this outdoor venue that is just a short drive away.       
                </li>
              </ul>
            </div>

            

            
            
            <div className="ml-3">
              <div className="font-semibold">Amusements/Water Parks/Go-Karts:</div>
              <div className="ml-3 text-sm">
              - Looking for a fun outing for the family? Visit one of the Ocean City’s amusement parks. Jolly Roger has locations on 30th Street as well as the pier at the southern end of the boardwalk.<br/>
              - There are several options for go-karting in the area, including: Speedworld Go-Karts, Grand Prix Amusements & ProTrack, and Baja Amusements, among many others.<br/>
      
              </div>
              <ul className="list-disc ml-5 mb-8">
                <li>
                  <span className="font-semibold mr-2"><a href="https://splashmountainoc.com/"  target="_blank" rel="noreferrer">Jolly Roger's Splash Mountain<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  (4.5 mi)
                  <a href="https://goo.gl/maps/jXDP2xPYCLH3rum48" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  The largest waterpark on the Eastern Shore! You're welcome to bring a cooler with your own food and beverages.               
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://jollyrogeroc.com/"  target="_blank" rel="noreferrer">Jolly Roger at 30th Street<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  (4.5 mi)
                  <a href="https://goo.gl/maps/fhGJzivzuaFXLLsw9" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  Co-located with Splash Mountain, enjoy many rides for a fun time out with the family.              
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://jollyrogerpieroc.com/"  target="_blank" rel="noreferrer">Jolly Roger at the Pier<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  On the Boardwalk (7.0 mi)
                  <a href="https://goo.gl/maps/w1V4XpiToy3nJZFn8" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  Enjoy the views from the Giant Wheel and all the fun rides with Jolly Rodger on the pier at the southern end of the boardwalk.              
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
                  Assateague Island, located just south of Ocean City, is 37 miles long - known for wild ponies and beautiful beaches.               
                </li>
              </ul>
            </div>
            
          </article>
        </div>
      </>
    )
  }

