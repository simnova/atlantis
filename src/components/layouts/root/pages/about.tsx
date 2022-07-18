import { Route, Routes } from 'react-router-dom';
import { AboutStaff } from './about-staff';
import { AboutRules} from './about-rules';
import { AboutHistory } from './about-history';

export const About: React.FC<any> = (_props) => {
  return (
    <Routes>
      <Route path="" element={<AboutStaff />} />
      <Route path="staff" element={<AboutStaff />} />
      <Route path="rules" element={<AboutRules />} />
      <Route path="history" element={<AboutHistory />} />
    </Routes>
  )
}