"use client"

import { MouseEventHandler } from "react";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import useFavourite from "@/hooks/use-favourite";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({data}) => {

    const cart = useCart();
    const favourite = useFavourite();

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) =>{
        event.stopPropagation();
        cart.addItem(data);
    }
    const onAddToWishlist: MouseEventHandler<HTMLButtonElement> = (event) =>{
        event.stopPropagation();
        favourite.addItem(data);
    }


    return (
        <div>
            <h1 className="text-4xl font-serif font-semibold text-gray-900">{data.name}</h1>
            <div>⭐⭐⭐⭐⭐ <span>10 reviews</span> </div>
            <div className="mt-3 flex items-center justify-start gap-3">
                <p className="text-2xl font-sans text-gray-900">
                    {/* here we will show discounted price */}
                    <Currency value={data?.price}/>
                </p>
                <p className="text-lg line-through font-sans text-gray-600">
                    {/* here we will show original price */}
                    <Currency value={data?.price}/>
                </p>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Quantity:</h3>
                    <div>
                        6 Piece set
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <div>
                        {`${data?.size?.name} (${data?.size?.value})`}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Material:</h3>
                    <div>
                        {`${data?.material}`}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black"> Color:</h3>
                    <div className="h-6 w-6 rounded-full border border-gray-600"
                        style={{backgroundColor: data?.color?.value}}
                    />
                </div>
            </div>

            <div className="mt-10 flex flex-col items-start gap-x-3">
                <div className="flex items-center border border-[#965a22] rounded-3xl mb-4">

                    <Button className="p-1 bg-[#965a22]"> <Minus/> </Button>
                    <p className="ml-4 mr-4 text-2xl">1</p>
                    <Button className="p-1 bg-[#965a22]"> <Plus/> </Button>

                </div>
                <div className="flex gap-x-2">
                    <Button onClick={onAddToCart} className="flex items-center gap-x-2">
                        Add To Cart
                        <ShoppingCart/>
                    </Button>
                    <Button onClick={onAddToWishlist} className="p-3">
                        <Heart/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Info;