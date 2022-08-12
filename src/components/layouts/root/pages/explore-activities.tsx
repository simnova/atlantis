import { Helmet } from "react-helmet"
import { AiOutlineEnvironment } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"
import styles from './explore-activities.module.css'; 

import AssawomanWildlifeArea from '../../../../assets/assawoman-wildlife-area.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp&useResponsiveLoader=true';


export const ExploreActivities: React.FC<any> = (_props) => {
    return (
      <>
        <Helmet>
          <title>Activities</title>
        </Helmet>
        <Heading level={HeadingLevel.H1}>Activities</Heading>
        <div className="mb-8 italic text-sm">Curated by Atlantis Co-Owners and Staff</div>

        <img src={AssawomanWildlifeArea.src}  srcSet={AssawomanWildlifeArea.srcSet}  alt={`Assawoman Wildlife Area`} className="object-fill mt-6  mb-6"/>

        
        
        <div className={['space-y-5', styles['container']].join(' ') }>
          <article>
            <Heading level={HeadingLevel.H6}>Must See Activities:</Heading>
            <p className="mb-5">
              Explore all that Ocean City has to offer!
            </p>

            <div className="ml-3">
              <div className="font-semibold">Skateboarding: </div>
              <div className="ml-3 text-sm">
                The <a href="https://oceancitymd.gov/oc/departments/recreation-parks/skate-park/"  target="_blank" rel="noreferrer">Ocean Bowl Skate Park <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> Open Year Round (weather permitting) <br/><br/>
    
                
              </div>
            </div>
            <div className="ml-3">
              <div className="font-semibold">Shopping:</div>
              <div className="ml-3 text-sm">

              </div>
              <ul className="list-disc ml-5 mb-8">
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.outletsoceancity.com/"  target="_blank" rel="noreferrer">Outlets<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                   West Ocean City(7.2 mi)
                  <a href="https://g.page/outletsoceancity?share" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                </li>
              </ul>
            </div>



            <div className="ml-3">
              <div className="font-semibold">Fishing:</div>
              <div className="ml-3 text-sm mb-2">
                Home to the <a href="https://whitemarlinopen.com/"  target="_blank" rel="noreferrer">White Marlin Open<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a>&nbsp;
                and the <a href="https://octunatournament.com/" target="_blank" rel="noreferrer">Ocean City Tuna Tournament<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a>&nbsp;
                Ocean City is a destination for both sport and casual fishing.<br/>
                
                Fishing Resources:
                  [<a href="https://fishinoc.com/"  target="_blank" rel="noreferrer">Fish in OC<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a>]<br/>
              </div>
              <ul className="list-disc ml-5 mb-8">
                <li>
                  <span className="font-semibold mr-2"><a href="https://oceancitymd.gov/oc/surf-fishing-in-ocean-city/"  target="_blank" rel="noreferrer">Surf Fishing<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Right on the beach!<br/>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://oceancitymd.gov/oc/surf-fishing-in-ocean-city/"  target="_blank" rel="noreferrer">Northide Park Pier Fishing<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  (1.2 mi)
                  <a href="https://goo.gl/maps/T64x2ZN48xHMkeVX6" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>  
                  Ocean City has two free fishing zones - The Pier at Northside park is one of them and is close by!<br/>
                  Registration (required) is free and can also be done over the phone during daytime hours of 7am-7pm at 1-855-855-3906.
                </li>
              </ul>
            </div>
            <div className="ml-3">
            <div className="font-semibold">Water Sports:</div>
              <div className="ml-3 text-sm mb-2">
                You'll find a variety of water sports activities at Ocean City.  Whether you're looking to swim, paddle, or kayak, you'll find something for everyone.  <br/>
                Easily rent a pontoon boat, jet skis or even charter a floating tiki-hut!<br/>
                Family favorites include a ride on a speed boat, or if you prefer a little more calm ride, a sailboat.  <br/>
              </div>
              <ul className="list-disc ml-5 mb-8">
                <li>
                  <span className="font-semibold mr-2">Surfing : </span><br/>
                  Ocean City closes off sections of the beach each day to allow surfers a chance to catch a wave.<br/>
                  Check the <a href="https://oceancitymd.gov/pdf/SurfingRotationSchedule.pdf"  target="_blank" rel="noreferrer">Surf Schedule<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> to find out when and where. <br/>
                </li>
                <li>
                  <span className="font-semibold mr-2">Paddleboarding / Kayaking : </span><br/>
                  The Assawoman Bay is a great place to experience Paddleboarding and Kayaking, and there are various spots to rent a paddleboard from across OCMD. <br/>
                </li>
                <li>
                  <span className="font-semibold mr-2">Sailing  : </span>
                   (7.9 mi)
                  <a href="https://goo.gl/maps/Kwgo7XEomiAyWimU8" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  <a href="https://sailalyosha.com/"  target="_blank" rel="noreferrer">SailAlyosha<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> offers chartered sailing on a 50' catamaran, a great way to take in the sights.
                </li>
                <li>
                  <span className="font-semibold mr-2">Boating / JetSki Rentals : </span><br/>
                  
                  Enjoy an afternoon on a pontoon boat or jet ski.  <br/>

                  <a href="http://baysideboatrentals.com/"  target="_blank" rel="noreferrer">Bayside Boat Rentals & Jet Ski Rentals <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> is one of many places to rent a boat or jet ski.    
                  (2.7 mi) <a href="https://g.page/baysideboatrentals?share" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                          
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://ocfishtales.com/cruisin-tikis/"  target="_blank" rel="noreferrer">Crusin' Tikis <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  (4.7 mi)
                  <a href="https://g.page/Cruisintikisoc?share" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  Bring your own booze and enjoy a cruise on a tiki boat. 
                </li>
              </ul>
            </div>

            <div className="ml-3">
              <div className="font-semibold">Sightseeing :</div>
              <div className="ml-3 text-sm">
      
              </div>
              <ul className="list-disc ml-5 mb-8">
                <li>
                  <span className="font-semibold mr-2"><a href="https://stateparks.com/assawoman_bay_state_wildlife_area_in_delaware.html"  target="_blank" rel="noreferrer">Assawoman Bay Lookout Point<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  (10.8 mi)
                  <a href="https://goo.gl/maps/i5j7dou4EMdqCWTH7" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  The watchtower is about 50 feet tall and great spot for photography and birdwatching.       
                </li>                
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.nps.gov/asis/index.htm"  target="_blank" rel="noreferrer">Assateague Island <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  (22.6 mi)
                  <a href="https://goo.gl/maps/5KoRLRP4LA54weqx7" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  Assateague Island, located just south of Ocean City, is 37 miles long - known for wild ponies and beautiful beaches.               
                </li>
              </ul>
            </div>
            <div className="ml-3">
              <div className="font-semibold">Museums / Art / Galleries :</div>
              <div className="ml-3 text-sm">
 
 
              </div>
              <ul className="list-disc ml-5 mb-8">
                <li>
                  <span className="font-semibold mr-2"><a href="https://artleagueofoceancity.org/"  target="_blank" rel="noreferrer">The Art League of Ocean City<BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  (0.7 mi)
                  <a href="https://goo.gl/maps/rfqcWcQaRGAnnsa69" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>
                  Rotating art gallery - always something new to see!       
                </li>                
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.berlinmermaidmuseum.com/"  target="_blank" rel="noreferrer">The Mermaid Museum <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Berlin (14.5 mi)
                  <a href="https://g.page/the-mermaid-museum?share" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br/>         
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

