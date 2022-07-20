import { Route, Routes } from 'react-router-dom';
import { AboutStaff } from './about-staff';
import { AboutHistory } from './about-history';
import { AboutOwnership } from './about-ownership';

export const About: React.FC<any> = (_props) => {
  return (
    <Routes>
      <Route path="" element={<AboutStaff />} />
      <Route path="staff" element={<AboutStaff />} />
      <Route path="history" element={<AboutHistory />} />
      <Route path="ownership" element={<AboutOwnership />} />
    </Routes>
  )
}