import { Helmet } from "react-helmet"
import { AiOutlineEnvironment } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"
import { HashLink as Link } from 'react-router-hash-link';
import styles from './explore-dining.module.css'; 

export const ExploreDining: React.FC<any> = (_props) => {
    const scrollWithOffset = (el:HTMLElement) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -85; 
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
    return (
      <>
        <Helmet>
          <title>Dining</title>
        </Helmet>

        <Heading level={HeadingLevel.H1}>Dining</Heading>
        <div className="mb-8 italic text-sm">Curated by Atlantis Co-Owners and Staff</div>
        
        
        <div className={['space-y-5', styles['container']].join(' ') }>
          <div>
            <Link to={'#fun-bars-restaurants'} smooth scroll={scrollWithOffset}>Theme Restaurants</Link>   |&nbsp;
            <Link to={'#restaurants'} smooth scroll={scrollWithOffset}>Restaurants</Link>   |&nbsp;
            <Link to={'#breweries'} smooth scroll={scrollWithOffset}>Breweries and Wineries</Link>
          </div>
          

          <article>
            <Heading level={HeadingLevel.H5} id="theme-restaurants">Theme Restaurants / Bars:</Heading>
            <div className="ml-3 text-sm">
              There is no shortage of fun places to go for your dining experience. The following is a short list of co-owners/staff favorites. Be sure to explore all that OCMD has to offer!
            </div>
            <div>
              <ul className="list-disc ml-5 mb-8">
                <li><span className="font-semibold mr-2"><a href="https://thegreeneturtle.com"  target="_blank" rel="noreferrer">Green Turtle <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>(~115 Street) – walkable</li>
                <li><span className="font-semibold mr-2">
                <a href="https://ocbeachresort.com/dining-nightlife/lennys-beach-bar-and-grill/"  target="_blank" rel="noreferrer">Lenny's Beach Bar & Grill <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>(next door at Fontainebleau Hotel)
                  <ul className="list-disc ml-5">
                    <li>Live music most nights (4-7pm)</li>
                    <li>Happy Hour 4-7PM M-F / 2-4 Sa-Su ( $7 burger / $3 domestic / $6 crushes)</li>
                  </ul>
                </li>
                <li><span className="font-semibold mr-2"><a href="https://www.deadfreddies.com/"  target="_blank" rel="noreferrer">Dead Freddies <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> (64 Street – bay side) family friendly</li>
                <li><span className="font-semibold mr-2"><a href="https://seacrets.com/"  target="_blank" rel="noreferrer">Seacrets <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> (49 Street – bay front) huge place, live music – 21+ crowd</li>
                <li><span className="font-semibold mr-2"><a href="https://ocfishtales.com/"  target="_blank" rel="noreferrer">Fish Tales <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> (22 Street – bay front)</li>
                <li><span className="font-semibold mr-2"><a href="https://picklesoc.com/"  target="_blank" rel="noreferrer">Pickles Pub <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> (8 Street & Philadelphia Ave) - good wings</li>
                <li><span className="font-semibold mr-2"><a href="https://www.ocshenanigans.com/"  target="_blank" rel="noreferrer">Shenanigan’s Irish Pub <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> (On Boardwalk)</li>
                <li><span className="font-semibold mr-2"><a href="https://www.delazylizard.com/"  target="_blank" rel="noreferrer">De Lazy Lizard <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> (1 Street- bay front)</li>
              </ul>
            </div>
          </article>
          <article>
            <Heading level={HeadingLevel.H5} id="restaurants">Nearby Restaurants:</Heading>
            <div className="ml-3 text-sm">
              Atlantis co-owners/staff have selected the following nearby restaurants that will help you get started in exploring OCMD.
            </div>
            <div>
              <ul className="list-disc ml-5 mb-8">
                <li><span className="font-semibold mr-2"><a href="https://fracturedprune.com/"  target="_blank" rel="noreferrer">The Original Fractured Prune <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> ( ~115 street) great donuts - $$ walkable</li>
                <li><span className="font-semibold mr-2"><a href="https://www.ocstreetfoodmd.com/"  target="_blank" rel="noreferrer">OC Street Food <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> (112 Street- bay side) – $  walkable</li>
                <li><span className="font-semibold mr-2"><a href="https://www.sophiasitalianrestaurantoceancity.com/"  target="_blank" rel="noreferrer">Sophia’s Italian <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> (112 Street -bay side) $$ – walkable</li>
                <li><span className="font-semibold mr-2"><a href="https://locations.dennys.com/MD/OCEAN-CITY/246555"  target="_blank" rel="noreferrer">Denny’s <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> (112 Street – bay side) very affordable breakfast (if you order the special) - $ walkable</li>
                <li><span className="font-semibold mr-2"><a href="http://www.bluefishocmd.com/"  target="_blank" rel="noreferrer">Blue Fish <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> (94 Street- Bay Side) Japanese – $$ </li>
                <li><span className="font-semibold mr-2"><a href="https://lombardisrestaurant.com/"  target="_blank" rel="noreferrer">Trattoria Lombardi’s <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> (94 Street – bay side) Pizza &amp; Italian Food – $$ walkable</li>
                <li><span className="font-semibold mr-2"><a href="https://www.bullonthebeachoc.com/"  target="_blank" rel="noreferrer">Bull on the Beach <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> (94 Street – beach side) Roast Beef / Ribs – $$ walkable</li>
                <li><span className="font-semibold mr-2"><a href="https://tinosmexicangrill.com/"  target="_blank" rel="noreferrer">Tinos Mexican Grill <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> (84st street- bay side) small, great for takeout - $ </li>
                <li><span className="font-semibold mr-2"><a href="https://www.dry85.com/ocean-city/"  target="_blank" rel="noreferrer">Dry 85 <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> (48 Street – beach side) Great food &amp; Cocktails – $$$ </li>
              </ul>
            </div>
          </article>
          <article>
            <Heading level={HeadingLevel.H5} id="restaurants">Top Rated Restaurants:</Heading>
            <div className="ml-3 text-sm">
              Looking for a meal that won't disappoint - this list of restaurants contains the highest rated from co-owners/staff.
            </div>
            <div>
              <ul className="list-disc ml-5 mb-8">
                <li><span className="font-semibold mr-2"><a href="http://www.cafemirageocmd.com/"  target="_blank" rel="noreferrer">Cafe Mirage <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
                <li><span className="font-semibold mr-2"><a href="https://www.longboardcafe.net/"  target="_blank" rel="noreferrer">Longboard Cafe <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
                <li><span className="font-semibold mr-2"><a href="https://www.captainmacsfishhouse.com/"  target="_blank" rel="noreferrer">Captain Mac's Fish House <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
                <li><span className="font-semibold mr-2"><a href="https://ocsunsetgrille.com/"  target="_blank" rel="noreferrer">Sunset Grill <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
                <li><span className="font-semibold mr-2"><a href="https://ocshark.com/"  target="_blank" rel="noreferrer">Shark on the Harbor <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
                <li><span className="font-semibold mr-2"><a href="http://bluefishocmd.com/"  target="_blank" rel="noreferrer">Blue Fish <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
                <li><span className="font-semibold mr-2"><a href="https://la94.com/"  target="_blank" rel="noreferrer">Liquid Assets <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
                <li><span className="font-semibold mr-2"><a href="https://whiskerspub.com/"  target="_blank" rel="noreferrer">Whiskers Pub <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
                <li><span className="font-semibold mr-2"><a href="https://www.thaiochamd.com/"  target="_blank" rel="noreferrer">Thai O-Cha <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
                <li><span className="font-semibold mr-2"><a href="https://thebaysideskillet.com/"  target="_blank" rel="noreferrer">Bayside Skillet  <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
                <li><span className="font-semibold mr-2"><a href="https://www.rosenfeldsjewishdeli.com/oclocation"  target="_blank" rel="noreferrer">Rosenfeld's Delicatessen  <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
                <li><span className="font-semibold mr-2"><a href="https://barrio64.com/"  target="_blank" rel="noreferrer">Barrio Taco  <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $</li>
                <li><span className="font-semibold mr-2"><a href="https://annabellesbbq.com/"  target="_blank" rel="noreferrer">Annabelle's BBQ &amp; Creamery <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
                <li><span className="font-semibold mr-2"><a href="https://packdabowl.square.site/"  target="_blank" rel="noreferrer">Pack Da Bowl  <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $</li>
                <li><span className="font-semibold mr-2"><a href="https://crabcake-factory-online.myshopify.com/"  target="_blank" rel="noreferrer">Crabcake Factory  <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
                <li><span className="font-semibold mr-2"><a href="https://ocmcrabs.biz/"  target="_blank" rel="noreferrer">OCM Crabs  <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
                <li><span className="font-semibold mr-2"><a href="https://nantucketsrestaurant.com/"  target="_blank" rel="noreferrer">David Twining's Nantuckets Restaurant  <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span> $$</li>
              </ul>
            </div>
          </article>

         
          <article>
            <Heading level={HeadingLevel.H6} id="breweries">Breweries / Wineries:</Heading>
            <div className="mb-5">
              OCMD Holds a number of Craft Beer and Wine Events throughout the year:
              
              <ul className="list-disc ml-3">
                <li><a href="https://shorecraftbeer.com/events/"  target="_blank" rel="noreferrer">Shore Craft Beer Events <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a></li>
                <li><a href="https://www.winefest.com/"  target="_blank" rel="noreferrer">WineFest <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> Sept 9th - 10th, 2022</li>
                <li><a href="https://fagers.ticketleap.com/wbw22/"  target="_blank" rel="noreferrer">Winder Bee and Wine Fest <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> Dec 10th, 2022</li>
              </ul>
              
              <div className="ml-3 mt-2 text-sm">
                Other resources: <br/>
                <a href="https://www.oceancity.com/craft-beer/" target="_blank" rel="noreferrer">OCMD Site Listing <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> 
              </div>
            </div>

            <div className="ml-3">
              <div className="font-semibold">South and West:</div>
              <ul className="list-disc ml-5 mb-8">
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.theotheronebrewing.com/"  target="_blank" rel="noreferrer">The Other One Brewing Company <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Downtown (4.5 mi)
                  <a href="https://goo.gl/maps/vUyM5TgKvZ2f1EFQ8" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://fincitybrewing.com/"  target="_blank" rel="noreferrer">Fin City Brewing Company <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  West Ocean City (7 mi) 
                  <a href="hhttps://goo.gl/maps/nBJtYCmstXxwpi8i9" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>&nbsp;-
                  In Hooper's Crab House
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.sinbrewing.com/"  target="_blank" rel="noreferrer">Sinepuxent Brewing Company <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Berlin, MD (10.3 mi)
                  <a href="https://goo.gl/maps/8EGUW5mwM6v5bNWU6" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://windmillcreekvineyard.com/"  target="_blank" rel="noreferrer">Windmill Creek Winery <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Berlin, MD (10.6 mi)
                  <a href="https://g.page/Windmillcreekvineyard?share" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.saltedvines.com/"  target="_blank" rel="noreferrer">Salted Vines Winery <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Frankfort, DE (12.4 mi)
                  <a href="https://g.page/Saltedvines?share" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://burleyoak.com/"  target="_blank" rel="noreferrer">Burley Oak Brewing Company <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Berlin, MD (13.6 mi)
                  <a href="https://goo.gl/maps/WJDnDSMsXcZUJJvu6" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.thebuzzmeadery.com/"  target="_blank" rel="noreferrer">The Buzz Meadery <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Berlin, MD (17 mi)
                  <a href="https://goo.gl/maps/KSBT5yHJpLy7V5ED7" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.bigoysterbrewery.com/"  target="_blank" rel="noreferrer">Big Oyster Brewery <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Lewes, DE (26.1 mi)
                  <a href="https://goo.gl/maps/JCG5W515PdwRAQmy7" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.evolutioncraftbrewing.com/"  target="_blank" rel="noreferrer">Evolution Craft Brewing Company <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Salisbury, MD (32.4 mi)
                  <a href="https://goo.gl/maps/EERFDzzwQuaofjy3A" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
              </ul>
            </div>
            <div  className="ml-3">
              <div className="font-semibold">North:</div>
              <ul className="list-disc ml-5 mb-8">
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.oceanviewbrewingde.com/"  target="_blank" rel="noreferrer">Ocean View Brewing Company <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Ocean View, DE (10 mi)
                  <a href="https://goo.gl/maps/J4uJFD3gwAHxkuRg6" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.bethanybrewing.net/"  target="_blank" rel="noreferrer">Bethany Brewing Company <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Ocean View, DE (11.9 mi)
                  <a href="https://goo.gl/maps/5FXFg1oeGWcq8nP19" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.dogfish.com/"  target="_blank" rel="noreferrer">Dogfish Head Brewpub <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Rehoboth Beach, DE (21.4 mi)
                  <a href="https://goo.gl/maps/kVzWP5YJYKHj58fF6" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a>
                </li>
              </ul>
            </div>
            <div  className="ml-3">
              <div className="font-semibold">Nearby Places of Interest:</div>
              <ul className="list-disc ml-5 mb-8">
                <li>
                  <span className="font-semibold mr-2"><a href="https://octaphouses.com/locations/137th-street/"  target="_blank" rel="noreferrer">Taphouse Tavern <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Ocean City  (2.1 mi)
                  <a href="https://goo.gl/maps/xEbjpLBD11Th3PiCA" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br />
                  Good Variety of Craft Beer on Tap
                </li>
                <li>
                  <span className="font-semibold mr-2"><a href="https://www.thebuzzedword.com/"  target="_blank" rel="noreferrer">Buzzed Word <BiLinkExternal className="align-text-bottom inline-block mb-px" /></a> : </span>
                  Ocean City  (0.8 mi)
                  <a href="https://goo.gl/maps/5QEoMNEGiqNKig8GA" target="_blank" rel="noreferrer" ><AiOutlineEnvironment  className="align-text-bottom inline-block mb-px mr-px" />Map</a><br />
                  A Really Unique Wine Store / Bar plus Book Store all rolled into one fun experience. <br/>
                  Hosts regular tasting events and has a great selection of wines.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </>
    )
  }

