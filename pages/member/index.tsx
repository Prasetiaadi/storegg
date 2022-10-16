/* eslint-disable jsx-a11y/alt-text */

import OverviewContent from '../../components/organism/OverviewContent';
import SideBar from '../../components/organism/SideBar';

/* eslint-disable @next/next/no-img-element */
export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu='overview'/>
      <OverviewContent />
    </section>
  );
}
