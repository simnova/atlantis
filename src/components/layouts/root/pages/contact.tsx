import { Helmet } from "react-helmet"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"
import styles from './contact.module.css'; 

import MelvinRostek from '../../../../assets/staff-melvin-rostek.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp';
import JennaElliott from '../../../../assets/staff-jenna-elliott.jpg?sizes[]=200,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp';



export const Contact: React.FC<any> = (_props) => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Heading level={HeadingLevel.H1}>Contacting the Atlantis:</Heading>
      <div className={['space-y-5', styles['container']].join(' ') }>

      
        <div>
          Office Hours are from 8:00am to 4:30pm Monday through Friday.<br/><br/>
          Email: <a href="mailto:atlantisocmd@comcast.net">atlantisocmd@comcast.net</a><br/>
          Phone: <a href="tel:+1-410-524-9100">410-524-9100</a><br/>
        </div>

        <article>
          <Heading level={HeadingLevel.H5}>Office Staff:</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            <div className="flex items-center inline-block">
              <img src={MelvinRostek.src}  srcSet={MelvinRostek.srcSet}  alt={`Profile of Melvin Rostek`} className="w-20 self-center rounded-full mt-6 ml-6 mb-6"/>
              <div className='ml-6'>
                <strong>Melvin Rostek</strong><br/>
                <span>General Manager</span>
              </div>
            </div>

            <div className="flex items-center inline-block">
              <img src={JennaElliott.src}  srcSet={JennaElliott.srcSet}  alt={`Profile of Melvin Rostek`} className="w-20 self-center rounded-full mt-6 ml-6 mb-6"/>
              <div className='ml-6'>
                <strong>Jenna Elliott</strong><br/>
                <span>Administrative Assistant</span>
              </div>
            </div>

          </div>
        </article>
      </div>
    </>
  )
}