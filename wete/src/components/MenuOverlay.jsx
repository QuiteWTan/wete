import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineInstagram, AiFillLinkedin,AiFillGithub,AiOutlineTwitter} from 'react-icons/ai';

const MenuOverlay = ({ NavLinks, NavState}) => {
  return (
    <ul className='flex flex-col items-center'>
        {NavLinks.map((link, index) => (
            <a href=''
                className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0" key={index}>
                    {link.Name}
            </a>
        ))}
        <ul className="flex font-bold flex-row items-center gap-4 py-2">
            <div className="p-2 rounded-full bg-gray-200 "><AiFillLinkedin size={25}/></div>
            <div className="p-2 rounded-full bg-gray-200 "><AiFillGithub size={25}/></div>
            <div className="p-2 rounded-full bg-gray-200 "><AiOutlineInstagram size={25}/></div>
        </ul>
    </ul>
  );
};

export default MenuOverlay;