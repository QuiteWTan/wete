import { useState } from "react"
import Logo from '../assets/Logo.png'
import {AiOutlineInstagram, AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import Link from "react-scroll";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);

    const NavLinks = [
        {
            Name: 'Home',
            href: '#home'
        },
        {
            Name: 'About',
            href: '#about'
        },
        {
            Name: 'Projects',
            href: '#projects'
        },
        {
            Name: 'Contact',
            href: '#contact',
        },
    ]
    return (
        <div className="md:absolute border-b-2 top-0 left-0 right-0 z-10 bg-opacity-100 font-raleway md:py-2 px-2">
            <div className="flex md:max-w-[1300px] max-w-[600px] m-auto flex-row justify-between items-center w-full h-full py-2 md:py-0 px-2 md:px-0 ">
                <div className="w-[100px] h-[70px] md:w-[80px] md:h-[60px] ">
                    <img src={Logo} alt="" className="w-full h-full "/>
                </div>

                <ul className="hidden md:flex flex-row justify-between gap-x-8 font-poppins text-[15px]">
                    {NavLinks.map((nav,index)=>(
                        <li className='border-b-2 border-transparent hover:border-black selection:transition-all duration-300' key={index}>
                            {nav.Name}
                        </li>
                    ))}
                </ul>

                <div className="flex md:hidden p-2 rounded-md border-gray-600 border-2 items-center" onClick={() => setOpenNav(!openNav)}>
                    {
                        openNav? 
                        <box-icon name='x'></box-icon>
                        : 
                        <box-icon box-icon name='menu' ></box-icon>
                    }
                </div>

                <ul className="hidden md:flex font-bold flex-row items-center gap-4">
                    <a href='' className="p-2 rounded-full bg-gray-200 hover:scale-105"><AiFillLinkedin size={25}/></a>
                    <a href='' className="p-2 rounded-full bg-gray-200 hover:scale-105"><AiFillGithub size={25}/></a>
                    <a href='' className="p-2 rounded-full bg-gray-200 hover:scale-105"><AiOutlineInstagram size={25}/></a>
                </ul>

            </div>     
            {openNav? <MenuOverlay NavLinks={NavLinks} NavState={openNav} /> : null}  
        </div>
    )
}

export default Navbar