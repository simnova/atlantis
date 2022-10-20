import { Helmet } from 'react-helmet';
import { Heading, HeadingLevel } from '../../../../../ui/atoms/heading';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './property-controller.module.css'; 
import PropertyControllerJsonLD from './property-controller.jsonld.json';


export const PropertyController: React.FC<any> = (_props) => {

  const scrollWithOffset = (el:HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -85; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <title>Property Controller</title>
        <script type="application/ld+json">{JSON.stringify(PropertyControllerJsonLD)}</script>
      </Helmet>
      
      <div className={['space-y-5', styles['container']].join(' ') }>
        <article>
          <Heading level={HeadingLevel.H1}>Property Controller:</Heading>
          
          <div className='my-4 space-x-5'>
            <div className='inline-block'>
              Email your resume to <a href="mailto:bod@atlantisocmd.com?subject=Property Controller">bod@atlantisocmd.com</a> to apply.
            </div>
            <div className='inline-block'>|</div>
            <div className='inline-block'>
              <Link  to={'../#'} smooth scroll={scrollWithOffset}> View All Available Positions</Link> 
            </div>
          </div>
          <p className='mb-4'>Atlantis, an oceanfront property in Ocean City, Maryland is excited to announce the exceptional career opportunity of Property Controller. Qualified candidates will thrive in a hospitality environment and be highly focused on providing superior service to the co-owners and their guests at the Atlantis.</p>
          <p className='mb-4'>The Property Controller is responsible for all phases of HOA accounting - including general accounting, monthly close, budgeting, cash flow analysis, banking, investments, and insurance. Draft financial statements and audits. Responsible for all internal and external reporting (actual and budgets).</p>
          <p className='mb-4'>Attend various HOA meetings. Respond to HOA Board and Committee request with high levels of customer service.</p>
          <Heading level={HeadingLevel.H4}>Compensation:</Heading>
          <ul>
            <li>$40,000+, based on experience</li>
          </ul>         
          <Heading level={HeadingLevel.H4}>Supervision Received and Exercised:</Heading>
          <ul>
            <li>This position reports to the Community Association Manager / General Manager (CAM/GA). </li>
            <li>The Property Controller provides technical training, guidance, and oversight to the Office Manager in matters dealing with finance. May supervise and direct the work of temporary/contract accounting support staff.</li>
          </ul>
          <Heading level={HeadingLevel.H4}>Job Duties and Responsibilities:</Heading>      
          <ul>
            <li>Responsible for financial management and processes of the HOA.</li>
            <li>Implements and adheres to policies and procedures for the accounting function, including compliance of all company accounting standards.</li>
            <li>Prepare annual budget, monitor cash flow, manage delinquency collection process, and appropriate community funds as approved by the Board of Directors.</li>
            <li>Monitors revenue goals as well as generating various (weekly, monthly, quarterly, and annual) business volume forecasts</li>
            <li>Monitors and coordinates property plans of overall future objectives, including projection of revenue, cost, net income, cash position, cash management, and capital requirements.</li>
            <li>Prepares and submits monthly financial statements and supporting schedules that identify actual, budget, variance and over/under based on the plan.</li>
            <li>Performs or monitors weekly revenue audits for revenue generating departments (i.e.: Parking, Vending, Maintenance Services, etc.).</li>
            <li>Analyzes various accounting reports such as accounts receivable, accounts payable, inventory, various general ledger, and monthly financial statements.</li>
            <li>Monitors and manages property cash flow and coordinates the appropriate timing of issuing payment to vendors. Alerts CAM/GA when cash flow problems exist.</li>
            <li>Prepares, coordinates, and reviews the closing of year-end books and records with the CAM/GA.</li>
            <li>Recommends to CAM/GA the implementation of policies, procedures, processes, and controls based on continual analysis of current accounting processes.</li>
            <li>Establishes accounting protocols and workflows based on property needs, ensuring compliance with accounting standards.</li>
            <li>Monitors contracts with facility's vendors.</li>
            <li>Ensures collection and payment of applicable local, state, and federal taxes. Prepares or reviews preparation of monthly tax reports.</li>
            <li>Manages both accounts receivable and accounts payable functions to include but not limited to: processing invoices, preparing statements, making payments, collections, reconciliation, and record keeping.</li>
            <li>Reconciles and audits petty cash, multiple bank accounts and cash banks.</li>
            <li>Regular and reliable attendance.</li>
            <li>Maintain current knowledge of profession and HOA laws.</li>
            <li>Daily functions for community, including invoice approval, contract review, cash receipts, dailies, etc.</li>
            <li>Draft Financial statements, including all internal and external reports based on generally accepted accounting principles and standards.</li>
            <li>Performs other duties as required.</li>
          </ul>
          <Heading level={HeadingLevel.H4}>Experience:</Heading>
          <ul>
            <li>2 yrs. industry of Public Accounting experience with GAAP.</li>
            <li>5+ years of demonstrated ability to provide detailed level bookkeeping support – accounts payable, accounts receivable, closing books monthly and preparing financial reporting and analysis for small businesses.</li>
            <li>CAM License Preferred but not required.</li>
            <li>Accounting experience within Real Estate or Property Management fields is highly desired.</li>
            <li>Ideal candidate will have HOA, Country Club, or Retail accounting /controller experience.</li>
            <li>Possession of an active (or in progress) license as a Certified Public Accountant issued by the Maryland Board of Public Accountancy is highly desirable.</li>
          </ul>
          <Heading level={HeadingLevel.H4}>Job Type:</Heading>
          <ul>
            <li>Full-time – evenings/weekends as needed</li>
          </ul>
          <Heading level={HeadingLevel.H4}>Benefits:</Heading>
          <ul>
            <li>Comprehensive Health Insurance (no cost for primary account holder) </li>
            <li>Paid time off (2 weeks, 3 weeks after 5 years of service) (limited vacation use in prime season) - accrued each pay period, max 1 week carryover at year’s end, max 2x PTO accrual</li>
            <li>401k with 3% match</li>
          </ul>
          <Heading level={HeadingLevel.H4}>Work Location:</Heading>
          <ul>
            <li>One location</li>
          </ul>
          <Heading level={HeadingLevel.H4}>Ability to commute/relocate:</Heading>
          <ul>
            <li>Ocean City, Maryland 21842: Reliably commute or plan to relocate before starting work (Required)</li>
          </ul>

        </article>
        
      </div>
    </>
  )
}