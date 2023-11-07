"use client"

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";
import {Navbar, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, NavbarMenu, NavbarMenuToggle, Avatar, DropdownSection} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";

interface MainNavProps{
    data:Category[]
}

const MainNav: React.FC<MainNavProps> =({data})=>{

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    const pathname= usePathname();

    const routes = data.map((route) => ({
        href:`${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    }));

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="bg-[#FFF7EF]"
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 w-full" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                    
                <NavbarItem>
                <Menu as="div" className=" inline-block text-left">
                    <div className=''>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-black">
                        Categories
                        <ChevronDown
                        className="ml-1 -mr-1 h-5 w-5 text-violet-200 hover:text-black"
                        aria-hidden="true"
                        />
                    </Menu.Button>
                    </div>
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className="absolute mt-2 origin-top rounded-md bg-[#FFF7EF]">
                        <div className="px-2 py-1 grid grid-cols-2">
                        {routes.map((route)=>(
                            <Menu.Item key={route.href}>
                                <Link 
                                    href={`/category/${route.href}`}
                                    key={route.href}
                                    className={cn("font-medium transition-colors text-md hover:text-black",
                                    route.active ? "text-black" : "text-gray-500")}>
                                        {route.label}
                                    </Link>
                                </Menu.Item>
                            ))} 
                        
                        </div>
                    </Menu.Items>
                    </Transition>
                </Menu>
                </NavbarItem>
                    
                <NavbarItem>
                    <Link color="foreground" href="#">
                    Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>

{/* mobile menu starts here */}
            <NavbarMenu>
            <NavbarContent className="flex flex-col gap-4 w-full" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem>
                <Menu as="div" className=" inline-block text-left">
                    <div className=''>
                    <Menu.Button className="inline-flex ml-2 w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-black">
                        Categories
                        <ChevronDown
                        className="ml-1 -mr-1 h-5 w-5 text-violet-200 hover:text-black"
                        aria-hidden="true"
                        />
                    </Menu.Button>
                    </div>
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className="absolute mt-2 origin-top rounded-md bg-white">
                        <div className="px-2 py-1 grid grid-cols-2 sm:grid-cols-3">
                        {routes.map((route)=>(
                            <Menu.Item key={route.href}>
                                <Link 
                                    href={`/category/${route.href}`}
                                    key={route.href}
                                    className={cn("text-sm font-medium transition-colors hover:text-black",
                                    route.active ? "text-black" : "text-gray-500")}>
                                        {route.label}
                                    </Link>
                                </Menu.Item>
                            ))} 
                        
                        </div>
                    </Menu.Items>
                    </Transition>
                </Menu>
                </NavbarItem>
                    
                <NavbarItem>
                    <Link color="foreground" href="#">
                    Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            </NavbarMenu>
            
        </Navbar>
    )
}

export default MainNav;