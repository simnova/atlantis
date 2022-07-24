import { Route, Routes } from 'react-router-dom';
import { ExploreActivities } from './explore-activities';
import { ExploreAttractions } from './explore-attractions';
import { ExploreDining } from './explore-dining';
import { ExploreEvents } from './explore-events';
import { ExploreGallery } from './explore-gallery';
import { ExploreMaps } from './explore-maps';
export const Explore: React.FC<any> = (_props) => {
    return (
      <Routes>
        <Route path="" element={<ExploreActivities />} />
        <Route path="activities" element={<ExploreActivities />} />
        <Route path="dining" element={<ExploreDining />} />
        <Route path="gallery" element={<ExploreGallery />} />
        <Route path="events" element={<ExploreEvents />} />
        <Route path="maps" element={<ExploreMaps />} />
        <Route path="attractions" element={<ExploreAttractions />} />
      </Routes>
    )
  }