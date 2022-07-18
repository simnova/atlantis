import { Heading, HeadingLevel } from '../../../ui/atoms/heading';


import { StaffFormat } from '../../../../content/staff-format';
import BoardMembers from '../../../../content/board-members.json';
import MaintenanceStaff from '../../../../content/maintenance-staff.json';
import OfficeStaff from '../../../../content/office-staff.json';
import SecurityStaff from '../../../../content/security-staff.json';

import { StaffMember } from '../../../ui/organisms/staff-member';

export const AboutStaff: React.FC<any> = (_props) => {
    let boardMembers: StaffFormat.RootObject = BoardMembers;
    let maintenanceStaff: StaffFormat.RootObject = MaintenanceStaff;
    let officeStaff: StaffFormat.RootObject = OfficeStaff;
    let securityStaff: StaffFormat.RootObject = SecurityStaff;
  return (
    <>
        <article>
        <Heading level={HeadingLevel.H5}>Board of Directors:</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {boardMembers.staff.map(
            (staffMember: StaffFormat.StaffMember, index) => {
                return (<StaffMember key={`staff-member-${index}`} data={staffMember} />)
            })
            }
        </div>
        </article>
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

    );
  };
  