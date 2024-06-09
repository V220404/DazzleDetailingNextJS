'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";



function NavBar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);





    return(
<div className={cn("fixed top-6 inset-x-0 max-w-2xl mx-auto z-50  text-xl font-mono ", className)}>
    <Menu setActive={setActive}>
        <Link href="/">
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
</Link>


{/* <Link href="/Service">


<MenuItem setActive={setActive} active={active} item="Service">
  <div className="flex flex-col space-y-4 text-sm">
  <HoveredLink href="/courses">Ceramic Coating</HoveredLink>
  <HoveredLink href="/courses">PPF</HoveredLink>
  <HoveredLink href="/courses">Deep Cleaning</HoveredLink>
  <HoveredLink href="/courses">Wraps</HoveredLink>
  <HoveredLink href="/courses">Car Care Pakage</HoveredLink>
  </div>
      
        </MenuItem></Link> */}

        <Link href="/service">
        
        <MenuItem setActive={setActive} active={active} item="Service"></MenuItem>
        </Link>

        <Link href="/contact">
        
        <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
        </Link>
    </Menu>













</div>






    )
}



export default NavBar