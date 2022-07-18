import { Route, Routes } from 'react-router-dom';
import { VisitingAmenities } from './visiting-amenities';
import { VisitingTransportation } from './visiting-transportation';
import { VisitingRules } from './visiting-rules';
import { VisitingNotices } from './visiting-notices';
import { VisitingCheckIn } from './visiting-check-in';
import { VisitingMaintenance } from './visiting-maintenance';

export const Visiting: React.FC<any> = (_props) => {
  return (
    <Routes>
      <Route path="" element={<VisitingAmenities />} />
      <Route path="amenities" element={<VisitingAmenities />} />
      <Route path="transportation" element={<VisitingTransportation />} />
      <Route path="rules" element={<VisitingRules />} />
      <Route path="notices" element={<VisitingNotices />} />
      <Route path="check-in" element={<VisitingCheckIn />} />
      <Route path="maintenance" element={<VisitingMaintenance />} />
    </Routes>
  )
}