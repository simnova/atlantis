import { Heading, HeadingLevel } from '../../../ui/atoms/heading';
import { HashLink as Link } from 'react-router-hash-link';
import { BiLinkExternal } from 'react-icons/bi';

export const VisitingAmenities: React.FC<any> = (_props) => {
    return (
      <>
        <Heading level={HeadingLevel.H1}>Amenities:</Heading>

        <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div>
                <Heading level={HeadingLevel.H4}>Parking:</Heading>
                With xx parking spots, xx handicap spots, there is ample parking space for all guests.<br/>
                <Link to={'/visiting/rules#parking'}>Learn more</Link>
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Outdoor Showers:</Heading>
                Located conveniently by the pool, outdoor showers are available for all guests to rinse off themselves and their beach equipment before entering the building or pool.<br/>
            </div>

            
            <div>
                <Heading level={HeadingLevel.H4}>Ground Floor Bathrooms/Showers:</Heading>
                Located in the ground floor of the building, there are bathrooms and showers for all guests.<br/>
                Use your room key to access the bathrooms.
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Dog Lot (Co-Owners Only):</Heading>
                Located conveniently by the pool, the dog lot is a secure and easy way to allow your dogs to relieve themselves.
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Pool:</Heading>
                Located conveniently by the pool, outdoor showers .
                <Link to={'/visiting/rules#pool'}>Learn more</Link> 
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Bike Racks:</Heading>
                Located at ground level under the north most corner of the building.
                <Link to={'/visiting/rules#bikes'}>Learn more</Link> 
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Water / Ice Machine:</Heading>
                Located conveniently by the pool, outdoor showers . 
            </div>

            <div>
                <Heading level={HeadingLevel.H4}>Snack Shack:</Heading>
                Located in the security office: <br/>
                $2.00 - 20oz bottles of water and soda <br/>
                $1.00 - bag of chips
            </div>


            <div>
                <Heading level={HeadingLevel.H4}>Beach:</Heading>
                Ocean City Beaches are free to the public (no beach passes required).<br/>

                Bonfires<br/>
                Enjoy the beach at night too! You must <a href="https://ocbonfires.com/" ><BiLinkExternal />register pay $75 fee online</a> in order to have a bonfire.
            </div>
        </div>
      </>
    )   
}