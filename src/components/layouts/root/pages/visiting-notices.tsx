import { Helmet } from "react-helmet"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"

export const VisitingNotices: React.FC<any> = (_props) => {
    return (
      <>
        <Helmet>
          <title>Building Status</title>
        </Helmet>
        <Heading level={HeadingLevel.H1}>Building Status</Heading>
        
        <div className="space-y-5 mb-[5rem]">

          <article>
            <Heading level={HeadingLevel.H5}>Pool:</Heading>
            <p>
              <span className="px-3 py-1 mr-2 rounded-full font-semibold text-sm text-white  bg-slate-500">Closed for Season</span>
              The pool is closed for the season - will open ~May 2023.
            </p>
          </article>
        </div>

        <Heading level={HeadingLevel.H1} className="mt-6">Upcoming Events</Heading>
        
        <div className="space-y-5 mb-[5rem]">
          <article>
            <Heading level={HeadingLevel.H5}>Fire Alarm Testing:</Heading>
            <p>
              <span className="px-3 py-1 mr-2 rounded-full font-semibold text-sm text-white bg-slate-500">No Scheduled Tests</span>
              No upcoming tests at this time.
            </p>
          </article>
        </div>


        <Heading level={HeadingLevel.H1} className="mt-6">Notices</Heading>


        <div className="space-y-5 mb-[5rem]">
          <article>
            <Heading level={HeadingLevel.H5}>JAN-2022</Heading>
              <span className="px-3 py-1 mr-2 rounded-full font-semibold text-sm text-white bg-slate-500">Staffing</span> Welcome Kristin<br/><br/>
            <p>
 
              We are thrilled to announce that Kristin Moore has joined our community as the new Community Association Manager.<br/>
              With over 15 years of experience in the field, Kristin brings a wealth of knowledge and expertise to our team.
              She has managed a variety of properties, including townhomes, single family homes, and condominiums, and has a 
              proven track record of preparing monthly management reports and overseeing the preparation and tracking of annual budgets.
              Kristin is skilled in Microsoft Suite, Jenark, Strongroom, and other industry operating systems, and is known for her 
              excellent customer service skills and attention to detail.<br/><br/>
              We are confident that Kristin will be an asset to our community, and we look forward to working with her. 
              <br/><br/>
              Welcome to the team, Kristin!
              
              <br/>

            </p>
          </article>
        </div>
        
        <div className="space-y-5  mb-[5rem]">
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

