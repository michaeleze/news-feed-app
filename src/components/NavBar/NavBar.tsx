"use client"
import type { NavBarProps } from '@/types/index';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Modal = dynamic(() => import('@/components/Modal/Modal'))

import { useState } from 'react';

const NavBar: React.FC<NavBarProps> = ({ title, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    if (modal) {
      modal?.showModal();
    }
  }

  return (
    <section className="navbar sticky top-0 z-10">
      <div className="flex-0">
        <a className="btn btn-ghost text-xl">{title}</a>
      </div>
      <div className="p-4 flex md:rounded-full backdrop-blur-sm bg-black/30 flex-col md:flex-row gap-20 md:gap-0">
        <div className={`${isOpen && 'border-b'}  py-3`}>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>MENU</button>
        </div>
        <nav className={`flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0 md:space-x-10 ${isOpen ? 'block' : 'hidden'} md:block max-w-full max-h-full`}>
          <Link className="text-white hover:text-blue-500 transition-colors" href="#">
            Home
          </Link>
          <Link className="text-white hover:text-blue-500 transition-colors" href="#">
            About
          </Link>
          <Link className="text-white hover:text-blue-500 transition-colors" href="#">
            Contact
          </Link>
          <Link className="text-white hover:text-blue-500 transition-colors" href="#">
            <button className="btn btn-primary place-content-center" onClick={showModal}>{link}</button>
            <Modal subtitle='Personalize News Feed' />
          </Link>
        </nav>
      </div >
    </section>
  );
};

export default NavBar;
