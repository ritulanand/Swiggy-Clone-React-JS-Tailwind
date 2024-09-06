import React, {useState} from 'react'
import { PiCaretDownLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icon : <IoIosSearch />,
            name: "Search"
        },
        {
            icon : <CiDiscount1 />,
            name: "Offers",
            sup: 'New'
        },
        {
            icon : "",
            name: "Help"
        },
        {
            icon : "",
            name: "Sign In"
        },
        {
            icon : "",
            name: "Cart"
        },
    ]

  return (
    <>
    <div className=" black-overlay w-full h-full fixed duration-500"  onClick={hideSideMenu} style={{
        opacity: toggle ? 1 :0,
         visibility : toggle ? "visible" : "hidden",
         zIndex: 999999
         }}>
        <div  onClick={(e) => {e.stopPropagation()}} className='w-[500px] bg-white h-full absolute duration-[400ms]' style={{left : toggle ? '0%' : '-100%'}}>

        </div>
    </div>
    <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
        <div className='max-w-[1200px] mx-auto  flex items-center'>
                <div className='w-[100px] '>
                    <img src="images/swiggy.png" className="w-full" alt="" />
                </div>
                <div className=''>
                       <span className='font-bold border-b-[3px] '>Rajivnagar</span>  Patna, Bihar, India  <PiCaretDownLight onClick={showSideMenu} fontSize={25} className='font-bold inline text-[#ff5200] cursor-pointer'/>
                </div>
                <nav className='hidden md:flex list-none gap-10 ml-auto font-semibold text-[18px]'>
                    
                {links.map((link,index) => {
                             return  <li key={index} className='flex cursor-pointer hover:text-[#fc8019] items-center gap-2'>
                              {link.icon}
                              {link.name}
                              <sup>{link.sup}</sup>
                          </li>
                        })}
                  
                </nav>
        </div>
    </header>
    </>
  )
}
