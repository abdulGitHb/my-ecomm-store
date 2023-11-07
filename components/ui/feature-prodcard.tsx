"use client"

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import IconButton from "./icon-button";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface FeatureProdCard{
    data: Product;
}

const FeatureProdCard:React.FC<FeatureProdCard> =({data})=>{

    const previewModal = usePreviewModal();
    const router = useRouter();
    const cart = useCart();

    const handleClick = () =>{
        router.push(`/product/${data.id}`)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) =>{
        event.stopPropagation();
        previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) =>{
        event.stopPropagation();
        cart.addItem(data);
    }


    return (
        <div onClick={handleClick} className="bg-white h-full w-full flex flex-col sm:flex-row justify-around group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className="m-auto rounded-xl min-w-[150px]">
                <Image
                    width={150}
                    height={150}
                    src={data?.images?.[0].url}
                    
                    alt="ProdImage"
                    className="aspect-square rounded-full object-cover "
                />
                
            </div>

        {/* Description */}
        <div className="flex flex-col ml-6">
            <div >
                <p className="font-semibold text-xl w-[173px] break-words">
                    {data.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.category?.name}
                </p>
                <p>⭐⭐⭐⭐⭐</p>
            </div>
        {/* Price */}
            <div className="mt-3 flex items-center gap-3">
                    <p className="text-lg sm:text-2xl font-sans text-gray-900">
                        {/* here we will show discounted price */}
                        <Currency value={data?.price}/>
                    </p>
                    <p className="text-md sm:text-xl line-through font-sans text-gray-600">
                        {/* here we will show original price */}
                        <Currency value={data?.price}/>
                    </p>
            </div>
        </div>

                    <div className="flex justify-center sm:flex-col gap-x-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition px-6 bottom-5r gap-y-6">
                        <IconButton 
                            onClick={onPreview}
                            icon={<Expand size={24} className="text-gray-600"/> }
                        />
                        <IconButton 
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={24} className="text-gray-600"/> }
                        />
                    </div>
        </div>
    )
}


export default FeatureProdCard;