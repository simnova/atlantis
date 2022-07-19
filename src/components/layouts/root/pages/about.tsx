import { Route, Routes } from 'react-router-dom';
import { AboutStaff } from './about-staff';
import { AboutHistory } from './about-history';

export const About: React.FC<any> = (_props) => {
  return (
    <Routes>
      <Route path="" element={<AboutStaff />} />
      <Route path="staff" element={<AboutStaff />} />
      <Route path="history" element={<AboutHistory />} />
    </Routes>
  )
}