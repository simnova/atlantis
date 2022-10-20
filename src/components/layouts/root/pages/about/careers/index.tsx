import { Route, Routes } from 'react-router-dom';
import { Root } from './root';
import { CommunityAssociationManager } from './community-association-manager';

import { PropertyController } from './property-controller';

export const Careers: React.FC<any> = (_props) => {
  return (
    <Routes>
      <Route path="community-association-manager" element={<CommunityAssociationManager />} />
      <Route path="property-controller" element={<PropertyController />} />
      <Route path="" element={<Root />} />
    </Routes>
  )
}