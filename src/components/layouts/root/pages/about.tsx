import { Route, Routes } from 'react-router-dom';
import { AboutStaff } from './about-staff';
import { AboutProperty } from './about-property';
import { AboutOwnership } from './about-ownership';
import { AboutHOA } from './about-hoa';

export const About: React.FC<any> = (_props) => {
  return (
    <Routes>
      <Route path="" element={<AboutStaff />} />
      <Route path="staff" element={<AboutStaff />} />
      <Route path="property" element={<AboutProperty />} />
      <Route path="ownership" element={<AboutOwnership />} />
      <Route path="hoa" element={<AboutHOA />} />
    </Routes>
  )
}