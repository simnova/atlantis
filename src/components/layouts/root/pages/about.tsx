import { Route, Routes } from 'react-router-dom';
import { AboutStaff } from './about-staff';
import { AboutProperty } from './about-property';
import { AboutOwnership } from './about-ownership';
import { AboutMaintenance } from './about-maintenance';
import { AboutHOA } from './about-hoa';
import { AboutSecurity } from './about-security';
import { Careers } from './about/careers';

export const About: React.FC<any> = (_props) => {
  return (
    <Routes>
      <Route path="" element={<AboutStaff />} />
      <Route path="staff" element={<AboutStaff />} />
      <Route path="property" element={<AboutProperty />} />
      <Route path="ownership" element={<AboutOwnership />} />
      <Route path="maintenance" element={<AboutMaintenance />} />
      <Route path="security" element={<AboutSecurity />} />
      <Route path="hoa" element={<AboutHOA />} />
      <Route path="careers/*" element={<Careers />} />
    </Routes>
  )
}