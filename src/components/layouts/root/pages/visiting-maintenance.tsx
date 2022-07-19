import { Heading, HeadingLevel } from '../../../ui/atoms/heading';
import { HashLink as Link } from 'react-router-hash-link';

export const VisitingMaintenance: React.FC<any> = (_props) => {
    return (
      <>
        <Heading level={HeadingLevel.H1}>Maintenance:</Heading>

        <div>

            The Atlantis wishes your visit to be a pleasant experience, should you experience any issues with the building, or your unit, contact the main Atlantis office with your issue as soon as possible.
            
            The onsite maintenance team will strive to make any necessary repairs as soon as possible after being notified of the problem.<br/><br/>

            The full time maintenance crew works hard to keep the Atlantis in good working order, both the shared building facilities as well as individual units.<br/><br/>

            Maintenance Staff is available 7 days a week 7AM to 5PM during the summer season.<br/><br/>



            Services provided include:<br/>

            <ul>
                <li>HVAC Issue Resolution</li>
                <li>Garbage Disposal Repair</li>
                <li>Pool issues</li>
            </ul>
            <br/><br/>
            Contact the main office number, provide your name and unit number and clearly describe the issue.
        </div>
      </>
    )
}
