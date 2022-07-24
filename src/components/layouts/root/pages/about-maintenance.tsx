import { Heading, HeadingLevel } from '../../../ui/atoms/heading';
import { Helmet } from 'react-helmet';
import { StaffFormat } from '../../../../content/staff-format';
import MaintenanceStaff from '../../../../content/maintenance-staff.json';

import { StaffMember } from '../../../ui/organisms/staff-member';

export const AboutMaintenance: React.FC<any> = (_props) => {
    let maintenanceStaff: StaffFormat.RootObject = MaintenanceStaff;
    return (
      <>
        <Helmet>
          <title>Maintenance Services</title>
        </Helmet>
        <Heading level={HeadingLevel.H1}>Maintenance Services:</Heading>

        <div>

            The Atlantis wishes your visit to be a pleasant experience, should you experience any issues with the building, or your unit, contact the Atlantis office with your issue as soon as possible.
            
            The onsite maintenance team will strive to make any necessary repairs as soon as possible after being notified of the problem.<br/><br/>

            The full time maintenance crew works hard to keep the Atlantis in good working order, both the shared building facilities as well as individual units.<br/><br/>

            Maintenance Staff is available 7 days a week 7AM to 5PM during the summer season.<br/><br/>


            <span className="font-bold">Services Provided Include: </span> 
            <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">HVAC Issue Resolution</li>
                <li className="mb-2">Garbage Disposal Repair</li>
                <li className="mb-2">Pool maintenance and issue resolution</li>
                <li className="mb-2">Renovations</li>
            </ul>

            <br/><br/>
            Contact the main office number, provide your name and unit number and clearly describe the issue.
        </div>


        <article>
        <Heading level={HeadingLevel.H5}>Maintenance Staff:</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {maintenanceStaff.staff.map(
            (staffMember: StaffFormat.StaffMember, index) => {
                return (<StaffMember key={`staff-member-${index}`} data={staffMember} />)
            })
            }
        </div>
        </article>
      </>
    )
}
