"use client";
import React, { useState } from "react";
import { HoveredLink, Menus, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar />
      <p className="text-black">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menus setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Products">
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
              href="/stitching/blouse"
              src="https://images.nightcafe.studio/jobs/GFZqJnfzl9ewjoSZSrmw/GFZqJnfzl9ewjoSZSrmw--1--jscsb.jpg?tr=w-1600,c-at_max"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Dress"
              href="/stitching/blouse"
              src="https://images.nightcafe.studio/jobs/4x4XuHiClrT0AA8EF3fz/4x4XuHiClrT0AA8EF3fz--1--5tf4v.jpg?tr=w-1600,c-at_max"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Jacket"
              href="/stitching/blouse"
              src="https://images.nightcafe.studio/jobs/BCDhO3RqvAQUPvWWiZ0G/BCDhO3RqvAQUPvWWiZ0G--g27o7.jpg?tr=w-1600,c-at_max"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Kurta-Kurti"
              href="/stitching/blouse"
              src="https://images.nightcafe.studio/jobs/rCIyxbC7yj7efKmrslEP/rCIyxbC7yj7efKmrslEP--1--mku3h.jpg?tr=w-1600,c-at_max"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Lehanga"
              href="/stitching/blouse"
              src="https://images.nightcafe.studio/jobs/wqGMudmZUAJ4g9LQIn3b/wqGMudmZUAJ4g9LQIn3b--1--dxk9u.jpg?tr=w-1600,c-at_max"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />

            <ProductItem
              title="Salwar Suit"
              href="/stitching/blouse"
              src="https://images.nightcafe.studio/jobs/aWSnxxsLTHFmy30LFzTl/aWSnxxsLTHFmy30LFzTl--1--1tkv2.jpg?tr=w-1600,c-at_max"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
          </div>
        </div>
      </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menus>
    </div>
  );
}
