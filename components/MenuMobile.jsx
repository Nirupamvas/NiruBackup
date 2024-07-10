import Link from 'next/link';
import React from 'react'
import {BsChevronDown} from "react-icons/bs"

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Stitching", url: "/category", subMenu: true },
    { id: 3, name: "Women", url: "/category/women" },
    { id: 4, name: "Men",url: "/women" },
    { id: 5, name: "Kids", url: "/indian-women" },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Blouse"},
    { id: 2, name: "Lehanga"},
    { id: 3, name: "Kurthi"},
    { id: 4, name: "Salwar Suit"},
    { id: 5, name: "Blouse"},
    { id: 6, name: "Lehanga"},
    { id: 7, name: "Kurthi"},
    { id: 8, name: "Ready-to-Dress"},
];

const MenuMobile = ({showCatMenu, setShowCatMenu, setMobileMenu}) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px]
        left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
        {data.map((item)=>{
            return (
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                        <li className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                            onClick={()=> setShowCatMenu(!showCatMenu)}

                        >
                            <div className="flex justify-between items-center">
                                {item.name}
                                <BsChevronDown size={14}/>
                            </div>

                            {showCatMenu && (
                                <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                                    {subMenuData.map((submenu)=>{
                                        return (
                                            <Link key={submenu.id} href="/" onClick={()=> {setShowCatMenu(false), setMobileMenu(false)}}>
                                                <li className=" py-4 px-8 border-t flex justify-between font-black">
                                                    {submenu.name}
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li className="py-4 px-5 border-b">
                            <Link 
                                href={item?.url} 
                                onClick={()=> setMobileMenu(false)}
                                >
                                {item.name}
                            </Link>
                        </li>
                    )}
                </React.Fragment>
            )
        })}

    </ul>
  )
}

export default MenuMobile