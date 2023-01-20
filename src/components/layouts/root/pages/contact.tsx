import { Helmet } from "react-helmet"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"
import styles from './contact.module.css'; 

import MelvinRostek from '../../../../assets/staff-melvin-rostek.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp&useResponsiveLoader=true';
import JennaElliott from '../../../../assets/staff-jenna-elliott.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp&useResponsiveLoader=true';



export const Contact: React.FC<any> = (_props) => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Heading level={HeadingLevel.H1}>Contacting the Atlantis:</Heading>
      <div className={['space-y-5', styles['container']].join(' ') }>

      
        <div>
          Office Hours are from 8:00 AM to 4:00 PM Monday through Friday via phone/email - <span className='text-sm'>(In-person availability Mo,Tu and Th)</span>.<br/><br/>
          Email: <a href="mailto:atlantisocmd@comcast.net">atlantisocmd@comcast.net</a><br/>
          Phone: <a href="tel:+1-410-524-9100">410-524-9100</a><br/>
        </div>

        <article>
          <Heading level={HeadingLevel.H5}>Office Staff:</Heading>
          <div className="grid grid-cols-1">

            <div className="flex items-center inline-block">
              <img src="https://via.placeholder.com/200"  alt={`Profile of Melvin Rostek`} className="w-20 self-center rounded-full mt-6 ml-6 mb-6"/>
              <div className='ml-6'>
                <strong>Kristin Moore</strong><br/>
                <span>Community Association Manager</span>
              </div>
              <div className='ml-3 mt-3'>
                Kristin Moore is a highly experienced community association manager with over 15 years of experience in the field. 
                She has managed a variety of properties, including townhomes, single family homes, and condominiums. 
                She has a proven track record of preparing monthly management reports, including financials and delinquency reports, 
                and overseeing the preparation and tracking of annual budgets. Kristin is skilled in Microsoft Suite, Jenark, Strongroom, 
                and other industry operating systems. 
                She is known for her excellent customer service skills and attention to detail, as well as her strong written and verbal 
                communication skills, including contract negotiation. She is also proficient in human resources having managed a staff 
                of 20+, vendor management, and risk management. 
                Kristin holds a CMCA certification and an AMS certification. 
                She is also very involved with CAI (Community Associations Institute), the group that governs the standards in the 
                Community Association Management industry and currently holds two of the three certifications offered. 
                She has also taken the necessary classes and exams to gain her CMCA (Certified Manager of Community Associations) and 
                AMS (Association Management Specialist) certifications
              </div>
            </div>
            

            

          </div>
        </article>
      </div>
    </>
  )
}