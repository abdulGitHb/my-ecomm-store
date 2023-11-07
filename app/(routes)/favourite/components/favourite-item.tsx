import Image from "next/image";
import { ShoppingBag, X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import useFavourite from "@/hooks/use-favourite";
import { MouseEventHandler } from "react";
import Button from "@/components/ui/button";


interface FavouriteItemProps {
  data: Product;
}

const FavouriteItem: React.FC<FavouriteItemProps> = ({
  data
}) => {
  const favourite = useFavourite();
  const cart = useCart();

  const onRemove = () => {
    favourite.removeItem(data.id);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) =>{
    event.stopPropagation();
    cart.addItem(data);
}

  return ( 
    <li className="flex py-6 border-b">
        <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
            <Image
                fill
                src={data.images[0].url}
                alt=""
                className="object-cover object-center"
            />
        </div>
        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="absolute z-10 right-0 top-0">
                <IconButton onClick={onRemove} icon={<X size={15} />} />
            </div>
            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div className="flex justify-between">
                    <p className=" text-lg font-semibold text-black">
                    {data.name}
                    </p>
                </div>

                <div className="mt-1 flex text-sm">
                    <p className="text-gray-500">{data.color.name}</p>
                    <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{data.size.name}</p>
                </div>
                <Currency value={data.price} />
                <Button onClick={onAddToCart} className="flex p-2 w-[150px] gap-x-2 items-center justify-center mt-10">Add To Cart <ShoppingBag size={18}/> </Button>
            </div>
        </div>
    </li>
  );
}
 
export default FavouriteItem;