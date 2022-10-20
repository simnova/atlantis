import { Helmet } from 'react-helmet';
import { Heading, HeadingLevel } from '../../../../../ui/atoms/heading';
import { HashLink as Link } from 'react-router-hash-link';

export const Root: React.FC<any> = (_props) => {

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
          <Heading level={HeadingLevel.H5}>Community Association Manager</Heading>
          <p> 
            Ocean City, MD &bull; Full-time &bull; Salaried
            <Link className="block w-[120px] py-2 px-4 bg-blue-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" to={'./community-association-manager#'} smooth scroll={scrollWithOffset}>Learn more</Link> 
          </p>
        </article>
        <article>
          <Heading level={HeadingLevel.H5}>Property Controller</Heading>
          <p> 
            Ocean City, MD &bull; Full-time &bull; Salaried
            <Link className="block w-[120px] py-2 px-4 bg-blue-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" to={'./property-controller#'} smooth scroll={scrollWithOffset}>Learn more</Link> 
          </p>
        </article>
        
      </div>
    </>
  )
}