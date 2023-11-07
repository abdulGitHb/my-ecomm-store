"use client"

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";

import { useState, useEffect } from "react";
import FavouriteItem from "./components/favourite-item";
import useFavourite from "@/hooks/use-favourite";

const FavouritePage = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const favourite = useFavourite();

    if (!isMounted) return null;
    
    return ( 
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black"> Whishlisted Items</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {favourite.items.length === 0 && <p className="text-neutral-500">No items added to the whishlist</p> }
                            <ul>
                                {favourite.items.map((item) => (
                                    <FavouriteItem key={item.id} data={item} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default FavouritePage;