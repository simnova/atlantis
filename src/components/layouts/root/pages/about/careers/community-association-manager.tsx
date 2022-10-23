import { Helmet } from 'react-helmet';
import { Heading, HeadingLevel } from '../../../../../ui/atoms/heading';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './community-association-manager.module.css'; 
import CommunityAssociationManagerJsonLD from './community-association-manager.jsonld.json';


export const CommunityAssociationManager: React.FC<any> = (_props) => {

  const scrollWithOffset = (el:HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -85; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <title>Careers</title>
        <script type="application/ld+json">{JSON.stringify(CommunityAssociationManagerJsonLD)}</script>
      </Helmet>
      
      <div className={['space-y-5', styles['container']].join(' ') }>
        <article>
          <Heading level={HeadingLevel.H1}>Community Association Manager:</Heading>
          
          <div className='my-4 space-x-5'>
            <div className='inline-block'>
              Email your resume to <a href="mailto:bod@atlantisocmd.com?subject=Community Association Manager">bod@atlantisocmd.com</a> to apply.
            </div>
            <div className='inline-block'>|</div>
            <div className='inline-block'>
              <Link  to={'../#'} smooth scroll={scrollWithOffset}> View All Available Positions</Link> 
            </div>
          </div>
          

          <p className='mb-4'>Atlantis, an oceanfront property in Ocean City, Maryland is excited to announce the exceptional career opportunity of Community Association Manager / General Manager. Qualified candidates will thrive in a hospitality environment and be highly focused on providing superior service to the co-owners and their guests at the Atlantis.</p>
          <p className='mb-4'>The Community Association Manager plans, directs, recommends, and implements policies and procedures to ensure the services required to maintain the common elements of the association are provided in a first-class manner and in accordance with community rules and regulations.</p>
          <p className='mb-4'>This is a hands-on leadership position responsible for overseeing the operational, administrative, financial, human resources, maintenance, and security functions of the community. The position requires the Community Association Manager to be on call 24 hours a day, 7 days a week for emergency consultation in the event of incidents requiring management intervention.</p>

          <Heading level={HeadingLevel.H4}>Compensation:</Heading>
          <ul>
            <li>$60,000-80,000+, based on experience</li>
          </ul>
          <Heading level={HeadingLevel.H4}>Supervision Received and Exercised:</Heading>
          <ul>
            <li>This position reports to the Board of Directors.</li>
            <li>The Community Association Manager exercises direct supervision and provides technical training, guidance, and oversight to office, security, maintenance, and pool staff.</li>
          </ul>
          <Heading level={HeadingLevel.H4}>Job Duties and Responsibilities:</Heading>

          <ul>
            <li>Develops and continually maintains strong co-owner relationships. Documents, interviews, and assists residents regarding complaints about direct employees and vendor staff conduct.</li>
            <li>Directs inspection of premises to detect hazards and to ensure that safety rules are posted and enforced.</li>
            <li>Promptly investigates and makes a full written report of all accidents or claims for property damage and personal injury relating to the ownership and maintenance of the common elements and operation of the Association, including damage or destruction to common elements.</li>
            <li>Assists in preparation of reports and insurance claims for damages to Association property, including estimated cost of repair, and causes repairs to be made in accordance with the Board of Directors’ approval.</li>
            <li>Assists in preparation and posting of the agenda for meetings of the Association and committee meetings and supervises file and record management.</li>
            <li>Attends meetings of the Board of Directors, Annual or Special Meetings.</li>
            <li>Attends committee meetings as needed.</li>
            <li>Must be capable of taking board meeting minutes if necessary.</li>
            <li>Assists in preparation of monthly financial reports and reviews same for accuracy and variance trends.</li>
            <li>Provides a monthly management report to the Board of Directors with recommendations, as appropriate, to enhance community appearance, values and promote harmony among residents.</li>
            <li>Provides a one-page, weekly report to the Board of Directors briefly summarizing the past week’s major events.</li>
            <li>Provides a prioritized action List to focus on all projects/duties within the community and the assigned task holder.</li>
            <li>Maintains a professional relationship with the Board of Directors and homeowners, whose requests for services shall be received and recorded so that requests can be acted upon expeditiously. Fully and promptly investigates and reports to the Board of Directors any serious complaints.</li>
            <li>Assists in establishing operational procedures for activities such as fire prevention, firefighting, traffic control and parking control.</li>
            <li>Assists in preparation of the Annual Budget and coordination of Board Meetings.</li>
            <li>Administers an annual operating budget. Prepares annual and long-term budgets. Assists with accounting functions, reviews accounts payable, codes and submits expenses for payment, maintains budget status and expenditures. Reviews budgets for variances monthly.</li>
            <li>Responsible for maintaining organization and secure keeping of blueprints, maps, etc.</li>
            <li>Prepares recommendations for collection action on delinquent accounts and acts as liaison with legal department and Association counsel and Board.</li>
            <li>Assists in monitoring compliance with Rules and Regulations and shall implement procedures for handling violations.</li>
            <li>Drafts and signs correspondence and required notices in connection with homeowners who are in violation of the Declaration and Rules and Regulations.</li>
            <li>Maintains accurate records to follow up on rule violations. Acts as liaison with counsel if legal action is required.</li>
            <li>Solicits bids for maintenance, construction and other community projects, and participates in selection of contractors and vendors for furnishing of landscape maintenance, janitorial and maintenance services, water, electricity, gas, telephone, pool maintenance, exterminator service, repairs or reconstruction of structural improvements, preventive maintenance, and such other services deemed to be in the best interests of the Association and necessary in order to administer the Association in a first-class manner in accordance with the Declaration.</li>
            <li>With approval of the Board of Directors, negotiates vendor and contractor proposals, terms, and conditions for providing services. Executes agreements stipulating extent and scope of responsibilities, service to be performed and fees for service. Employs, contracts, or performs services involved with maintenance, grounds keeping, and onsite management. Directly oversees these related services.</li>
            <li>Supervises and monitors contractors rendering services (approved by the Board of Directors) to the Association.</li>
            <li>Inspects the repair and maintenance of equipment and building components and reviews invoices to confirm work completion and contract compliance.</li>
            <li>Reviews and approves payroll for all direct employees and reviews and codes vendor invoices before payment.</li>
            <li>Assist with the administration of the various functions of the community within the projected and approved operating budget.</li>
            <li>Communicates to the Board of Directors and homeowners, events that will affect their use and enjoyment of the Association’s facilities.</li>
            <li>Communicates to the community ideas to help it prepare and cope with weather related events.</li>
            <li>Assists with emergency preparation and implementation of preparedness protocol as designed and approved.</li>
            <li>Maintain Association's website.</li>
            <li>Ensures all safety precautions and procedures are followed while performing duties.</li>
            <li>Ensures that team members follow all safety precautions and procedures while performing duties.</li>
            <li>Performs all responsibilities while demonstrating outstanding customer service skills representative of the Atlantis.</li>
            <li>Conduct routine site inspections, prepare site condition report, and recommend maintenance.</li>
            <li>Assist with preparing schedules and establishes priorities for routine and special work projects.</li>
            <li>Assist with implementation of Board policy and directives within the scope of the management agreement. Works with the board on strategic initiatives, policy governance and association projects.</li>
            <li>Supervise subordinate personnel, including scheduling and prioritizing work, training, monitoring, and evaluating performance, and recommending salary adjustments and/or disciplinary action.</li>
            <li>Act as a liaison between the Board of Directors and residents in the execution of the established policies and the conveyance of resident grievances.</li>
            <li>Responsible for training, planning, assigning, and directing work, evaluating performance, rewarding, and disciplining associates; addressing complaints and resolving problems.</li>
            <li>Coach, train and implement PIPs as needed for struggling direct reports.</li>
            <li>Manages timely completion of performance reviews for all direct reports.</li>
            <li>Conduct Monthly 1:1's for all employees.</li>
            <li>Attend CAI and other professional HOA organization meetings regularly.</li>
            <li>Other duties as assigned.</li>
          </ul>
          <Heading level={HeadingLevel.H4}>Knowledge and Skills:</Heading>
          <ul>
            <li>Knowledge of Microsoft Office 365 products (Teams, Word, Excel, Outlook, etc.) at a proficient level.</li>
            <li>Knowledge of the Association Board of Directors, the Community Association Manager/General Manager, and how those roles interface with the requests of homeowners.</li>
            <li>Knowledge of conflict resolution techniques at a proficient level.</li>
            <li>Professional communication skills (phone, interpersonal, written, verbal, etc.).</li>
            <li>Self-motivated, proactive, detail oriented and a team player.</li>
            <li>Time management and time critical prioritization skills.</li>
          </ul>
          <Heading level={HeadingLevel.H4}>Experience:</Heading>
          <ul>
            <li>Property Management: 3 years (Required)</li>
            <li>Accounting experience preferred, not required</li>
          </ul>
          <Heading level={HeadingLevel.H4}>License/Certification:</Heading>
          <ul>
            <li>Certified Manager of Community Associations (CMCA) credentialing is preferred, required within six months of hire.</li>
            <li>PCAM Certification from Community Association Institute (CAI)</li>
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