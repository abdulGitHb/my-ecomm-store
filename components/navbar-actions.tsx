"use client"

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
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

    if(!isMounted) return null;

    
    return (
        <div className="ml-auto flex items-center gap-x-4">
            
            <Button onClick={()=> router.push("/favourite")} className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-[#bd7634] rounded-full">
                <Heart size={22} color="black"/>
                <span className="sr-only">Favourite Count</span>
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-black bg-[#ebaa6e] border-2 border-[#bd7634] rounded-full -top-2 -right-2 ">20</div>
            </Button>

            <Button onClick={()=> router.push("/cart")} className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-[#bd7634] rounded-full">
                <ShoppingBag size={22} color="black"/>
                <span className="sr-only">Shopping Cart</span>
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-black bg-[#ebaa6e] border-2 border-[#bd7634] rounded-full -top-2 -right-2 ">{cart.items.length}</div>
            </Button>

        </div>
    )
}

export default NavbarActions;