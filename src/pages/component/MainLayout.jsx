import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import Apptitle from './Apptitle';
const MainLayout = () => {
  return (
    <div>
      <Apptitle></Apptitle>
      <Navs></Navs>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
