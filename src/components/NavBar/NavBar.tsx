"use client"
import { NavBarProps } from '@/types/index';
import Modal from '@/components/Modal/Modal';

const NavBar: React.FC<NavBarProps> = ({ title, link }) => {
  const showModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal?.showModal();
    }
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{title}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button className="btn btn-primary place-content-center" onClick={showModal}>{link}</button>
            <Modal subtitle='Personalize News Feed'/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
