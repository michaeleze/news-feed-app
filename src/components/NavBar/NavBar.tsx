import { NavBarProps } from '@/types/index';

const NavBar: React.FC<NavBarProps> = ({ title, link}) => {
  return (

<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">{title}</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>{link}</a></li>
    </ul>
  </div>
</div>
  );
};

export default NavBar;
