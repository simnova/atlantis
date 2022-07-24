import { Helmet } from "react-helmet"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"

export const ExploreAttractions: React.FC<any> = (_props) => {
    return (
      <>
        <Helmet>
          <title>Attractions</title>
        </Helmet>
        <Heading level={HeadingLevel.H1}>Attractions</Heading>
        <div className="mb-8 italic text-sm">Curated by Atlantis Co-Owners and Staff</div>
        <p>
        - Local Attractions
    
    
    Boardwalk
    
    Take a stroll on our 3-mile, [award-winning](https://www.travelchannel.com/interests/beaches/articles/americas-favorite-boardwalks) boardwalk! 
    
    There are plenty of restaurants to grab a bite.  Don’s want to miss a second of the action on the boardwalk?  Grab a slice of pizza from The Dough Roller, a bucket of Thrasher’s fries, or a cone from Kohr Bros. or Dumser’s Dairyland.  Or choose to be seated in one of the many restaurants along the boardwalk.
    
    Take the kids to one of several amusement areas for a variety of rides and games.
    
    Be sure to stop by one of the countless shops to grab a souvenir before you leave!
    
    - Amusements/Water Parks/Go-Karts
        - Looking for a fun outing for the family? Visit one of the Ocean City’s amusement parks. Jolly Roger has locations on 30th Street as well as the pier at the southern end of the boardwalk.
        - Visit Jolly Roger’s Splash Mountain - the largest waterpark on the Eastern Shore - for hours of family fun!
        - There are several options for go-karting in the area, including: Speedworld Go-Karts, Grand Prix Amusements & ProTrack, and Baja Amusements, among many others.
    - Berlin
        - 
    - Boat rides
    - Boat/jet ski/kayak rentals
    - Assateague Island
    - Golfing

        </p>

      </>
    )
  }

