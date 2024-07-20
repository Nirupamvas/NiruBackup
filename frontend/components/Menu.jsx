import Link from 'next/link';
import React, { useState } from 'react'
import {BsChevronDown} from "react-icons/bs"

import { HoveredLink,Menus, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";



const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "", url: "/category",subMenu: true},
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

const Menu = ({showCatMenu, setShowCatMenu}) => {
    const [active, setActive] = useState(null);
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
        {data.map((item)=>{
            return (
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                        <li className="cursor-pointer flex items-center gap-2 relative"
                            onMouseEnter={()=> setShowCatMenu(true)}    
                            onMouseLeave={()=> setShowCatMenu(false)}    
                        >
                            {item.name}
                            

                            {/* {showCatMenu && (
                                <ul className="bg-white absolute top-6 left-0 min-w-[140px] px-1 py-1 text-black shadow-lg">
                                    {subMenuData.map((submenu)=>{
                                        return (
                                            <Link key={submenu.id} href="/" onClick={()=> setShowCatMenu(false)}>
                                                <li className="h-12 flex justify-between items-center px-3 hover:#8bc343/[0.03] rounded-md">
                                                    {submenu.name}
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            )} */}
                            {
                                <Menus setActive={setActive}>
                                <MenuItem setActive={setActive} active={active} item="Stitching">
                                <div className="flex text-sm p-4 gap-4">
                                  <div className="flex flex-col space-y-4 ">
                                    <HoveredLink href="/stitching/shirt">Shirt</HoveredLink>
                                    <HoveredLink href="/stitching/skirt">Skirt</HoveredLink>
                                    <HoveredLink href="/stitching/top">Top</HoveredLink>
                                    <HoveredLink href="/stitching/trouser">Trouser</HoveredLink>
                                    <HoveredLink href="/stitching/ready-to-wear">Ready To Wear</HoveredLink>
                                  </div>
                                  <div className="grid grid-cols-2 gap-10 ml-auto">
                                    <ProductItem
                                      title="Blouse"
                                      href="/stitching/blouse"
                                      src="https://images.nightcafe.studio/jobs/GFZqJnfzl9ewjoSZSrmw/GFZqJnfzl9ewjoSZSrmw--1--jscsb.jpg?tr=w-1600,c-at_max"
                                      description=" Elegant and tailored tops for sarees, perfectly fitting for any occasion"
                                    />
                                    <ProductItem
                                      title="Dress"
                                      href="/stitching/dress"
                                      src="https://images.nightcafe.studio/jobs/4x4XuHiClrT0AA8EF3fz/4x4XuHiClrT0AA8EF3fz--1--5tf4v.jpg?tr=w-1600,c-at_max"
                                      description="Beautifully designed outfits for every occasion, offering a perfect blend of style and comfort."
                                    />
                                    <ProductItem
                                      title="Jacket"
                                      href="/stitching/jacket"
                                      src="https://images.nightcafe.studio/jobs/BCDhO3RqvAQUPvWWiZ0G/BCDhO3RqvAQUPvWWiZ0G--g27o7.jpg?tr=w-1600,c-at_max"
                                      description="Trendy and versatile outerwear that adds a fashionable touch to any outfit."
                                    />
                                    <ProductItem
                                      title="Kurta-Kurti"
                                      href="/stitching/kurta-kurti"
                                      src="https://images.nightcafe.studio/jobs/rCIyxbC7yj7efKmrslEP/rCIyxbC7yj7efKmrslEP--1--mku3h.jpg?tr=w-1600,c-at_max"
                                      description="Classic and comfortable tunics suitable for casual and formal wear."
                                    />
                                    <ProductItem
                                      title="Lehanga"
                                      href="/stitching/lehanga"
                                      src="https://images.nightcafe.studio/jobs/wqGMudmZUAJ4g9LQIn3b/wqGMudmZUAJ4g9LQIn3b--1--dxk9u.jpg?tr=w-1600,c-at_max"
                                      description="Exquisite traditional skirts paired with elegant blouses, ideal for festive and wedding wear."
                                    />
                        
                                    <ProductItem
                                      title="Salwar Suit"
                                      href="/stitching/salwarsuit"
                                      src="https://images.nightcafe.studio/jobs/aWSnxxsLTHFmy30LFzTl/aWSnxxsLTHFmy30LFzTl--1--1tkv2.jpg?tr=w-1600,c-at_max"
                                      description="Comfortable and stylish traditional attire with a blend of modern and ethnic designs."
                                    />
                                  </div>
                                </div>
                              </MenuItem>
                              </Menus>
                            }
                            <BsChevronDown size={14}/>
                        </li>
                    ) : (
                        <li className="cursor-pointer">
                            <Link href={item?.url}>{item.name}</Link>
                        </li>
                    )}
                </React.Fragment>
            )
        })}
        {/* <Menus setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Stitching">
        <div className="flex text-sm p-4 gap-4">
          <div className="flex flex-col space-y-4 ">
            <HoveredLink href="/web-dev">Shirt</HoveredLink>
            <HoveredLink href="/interface-design">Skirt</HoveredLink>
            <HoveredLink href="/seo">Top</HoveredLink>
            <HoveredLink href="/branding">Trouser</HoveredLink>
            <HoveredLink href="/branding">Ready To Wear</HoveredLink>
          </div>
          <div className="grid grid-cols-2 gap-10 ml-auto">
            <ProductItem
              title="Blouse"
              href="https://algochurn.com"
              src="https://images.nightcafe.studio/jobs/GFZqJnfzl9ewjoSZSrmw/GFZqJnfzl9ewjoSZSrmw--1--jscsb.jpg?tr=w-1600,c-at_max"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Dress"
              href="https://tailwindmasterkit.com"
              src="https://images.nightcafe.studio/jobs/4x4XuHiClrT0AA8EF3fz/4x4XuHiClrT0AA8EF3fz--1--5tf4v.jpg?tr=w-1600,c-at_max"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Jacket"
              href="https://tailwindmasterkit.com"
              src="https://images.nightcafe.studio/jobs/BCDhO3RqvAQUPvWWiZ0G/BCDhO3RqvAQUPvWWiZ0G--g27o7.jpg?tr=w-1600,c-at_max"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Kurta-Kurti"
              href="https://gomoonbeam.com"
              src="https://images.nightcafe.studio/jobs/rCIyxbC7yj7efKmrslEP/rCIyxbC7yj7efKmrslEP--1--mku3h.jpg?tr=w-1600,c-at_max"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Lehanga"
              href="https://userogue.com"
              src="https://images.nightcafe.studio/jobs/wqGMudmZUAJ4g9LQIn3b/wqGMudmZUAJ4g9LQIn3b--1--dxk9u.jpg?tr=w-1600,c-at_max"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />

            <ProductItem
              title="Salwar Suit"
              href="https://gomoonbeam.com"
              src="https://images.nightcafe.studio/jobs/aWSnxxsLTHFmy30LFzTl/aWSnxxsLTHFmy30LFzTl--1--1tkv2.jpg?tr=w-1600,c-at_max"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
          </div>
        </div>
      </MenuItem>
      </Menus> */}
    </ul>
  )
}

export default Menu