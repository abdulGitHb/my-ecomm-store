"use client"

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import useFavourite from "@/hooks/use-favourite";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarContent } from "@nextui-org/react";
import { Heart, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    }, []);

    const cart = useCart();
    const router = useRouter();
    const favourite = useFavourite();

    if(!isMounted) return null;

    
    return (
        <div className="ml-auto flex items-center gap-x-4">
            
            <Button onClick={()=> router.push("/favourite")} className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-[#bd7634] rounded-full">
                <Heart size={18} color="black"/>
                <span className="sr-only">Favourite Count</span>
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-black bg-[#ebaa6e] border-2 border-[#bd7634] rounded-full -top-2 -right-2 ">{favourite.items.length}</div>
            </Button>

            <Button onClick={()=> router.push("/cart")} className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-[#bd7634] rounded-full">
                <ShoppingBag size={18} color="black"/>
                <span className="sr-only">Shopping Cart</span>
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-black bg-[#ebaa6e] border-2 border-[#bd7634] rounded-full -top-2 -right-2 ">{cart.items.length}</div>
            </Button>

            <Navbar className="bg-transparent">
                <NavbarContent>
                    <Dropdown backdrop="blur" placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                            as="button"
                            className="transition-transform border-2 border-[#bd7634] ml-8"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger">
                            Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            </Navbar>

        </div>
    )
}

export default NavbarActions;