import { Helmet } from "react-helmet"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"

export const VisitingNotices: React.FC<any> = (_props) => {
    return (
      <>
        <Helmet>
          <title>Building Status</title>
        </Helmet>
        <Heading level={HeadingLevel.H1}>Building Status</Heading>
        
        <div className="space-y-5">

          <article>
            <Heading level={HeadingLevel.H5}>Pool:</Heading>
            <p>
              <span className="px-3 py-1 mr-2 rounded-full font-semibold text-sm text-white  bg-green-500">Operational</span>
              The pool is operating normally.
            </p>
          </article>
        </div>

        <Heading level={HeadingLevel.H1} className="mt-6">Upcoming Events</Heading>
        
        <div className="space-y-5">
          <article>
            <Heading level={HeadingLevel.H5}>Fire Alarm Testing:</Heading>
            <p>
              <span className="px-3 py-1 mr-2 rounded-full font-semibold text-sm text-white bg-slate-500">No Scheduled Tests</span>
              No upcoming tests at this time.
            </p>
          </article>
        </div>


        <Heading level={HeadingLevel.H1} className="mt-6">Notices</Heading>
        
        <div className="space-y-5">
          <article>
            <Heading level={HeadingLevel.H5}>JUL-2022 - Cart Policy Update:</Heading>
            <p>
 
              Visitors will have to leave either their ID or a credit card with security in order to check out a cart. After the cart is returned, the card will be returned to the visitor. 
              
              This policy has been put in place to encourage carts are returned in a timely manner.<br/>

            </p>
          </article>
        </div>

      </>
    )
  }

