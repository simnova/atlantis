import { Helmet } from 'react-helmet';
import { Heading, HeadingLevel } from '../../../ui/atoms/heading';
import { HashLink as Link } from 'react-router-hash-link';

export const AboutCareers: React.FC<any> = (_props) => {

  const scrollWithOffset = (el:HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -85; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <>
      <Helmet>
        <title>Careers</title>
      </Helmet>
      <Heading level={HeadingLevel.H1}>Careers:</Heading>
      <p>
        If you are a smart, self-motivated professional who values the true meaning of hospitality, we want to work with you.<br/><br/>
        Our latest open positions are listed below. We look forward to hearing from you!
        <br/><br/>
      </p>
      <div className="space-y-5 space-y-8">
        <article>
          <Heading level={HeadingLevel.H5}>Non Open Positions At This Time</Heading>
        </article>

        
      </div>
    </>
  )
}