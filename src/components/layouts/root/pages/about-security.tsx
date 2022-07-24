import { Heading, HeadingLevel } from '../../../ui/atoms/heading';
import { Helmet } from 'react-helmet';
import { StaffFormat } from '../../../../content/staff-format';
import SecurityStaff from '../../../../content/security-staff.json';

import { StaffMember } from '../../../ui/organisms/staff-member';

export const AboutSecurity: React.FC<any> = (_props) => {
    let securityStaff: StaffFormat.RootObject = SecurityStaff;
    return (
      <>
        <Helmet>
          <title>Security</title>
        </Helmet>
        <Heading level={HeadingLevel.H1}>Security Services:</Heading>

        <div>
            The full time security team ....<br/><br/>

            <span className="font-bold">Availability :</span><br/>
            Security staff is available 7 days a week 24hrs a day year round.<br/><br/>

        
            <span className="font-bold">Services Provided Include: </span> 
            <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">Unit Lockout</li>
                <li className="mb-2">Guest Registration and Parking Passes</li>
                <li className="mb-2">Selling Snacks / Sodas</li>
                <li className="mb-2">Security Video Monitoring</li>
            </ul>
        </div>


        <article>
        <Heading level={HeadingLevel.H5}>Security Staff:</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {securityStaff.staff.map(
            (staffMember: StaffFormat.StaffMember, index) => {
                return (<StaffMember key={`staff-member-${index}`} data={staffMember} />)
            })
            }
        </div>
        </article>
      </>
    )
}
