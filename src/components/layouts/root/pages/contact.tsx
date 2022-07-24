import { Helmet } from "react-helmet"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"

import { StaffFormat } from '../../../../content/staff-format';
import OfficeStaff from '../../../../content/office-staff.json';
import { StaffMember } from '../../../ui/organisms/staff-member';


export const Contact: React.FC<any> = (_props) => {
  let officeStaff: StaffFormat.RootObject = OfficeStaff;
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Heading level={HeadingLevel.H1}>Contacting the Atlantis:</Heading>

      <div>
        Office Hours are from 8:00am to 4:30pm Monday through Friday.<br/>
        Email: <a href="mailto:atlantisocmd@comcast.net">atlantisocmd@comcast.net</a><br/>
        Phone: <a href="tel:+1-410-524-9100">410-524-9100</a><br/>
      </div>

      <article>
        <Heading level={HeadingLevel.H5}>Office Staff:</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {officeStaff.staff.map(
            (staffMember: StaffFormat.StaffMember, index) => {
                return (<StaffMember key={`staff-member-${index}`} data={staffMember} />)
            })
            }
        </div>
      </article>
    </>
  )
}