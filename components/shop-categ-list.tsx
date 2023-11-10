"use client"

import { Category } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ShopCategoryListProps{
    items: Category[];
}

const ShopCategoryList: React.FC<ShopCategoryListProps> =({items}) => {

    const [visible, setVisible] = useState(true);

    const pathname= usePathname();

    const routes = items.map((route) => ({
        href:`${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    }));

    const slideLeft = () => {
        let slider:any = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 400;
      };
    
      const slideRight = () => {
        let slider:any = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 400;
      };


    return ( 
        <div>
            <div className="relative flex items-center w-full">
                {visible && <ChevronLeft onClick={slideLeft} className="opacity-50 hover:opacity-100 cursor-pointer" size={40}/>}
                <div id='slider'
                    className='w-full h-full overflow-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {items.map((item)=>(
                        <div key={item.id} className="inline-block p-3">
                            <Link href={`/category/${item.id}`}>
                                <Image 
                                    width={80}
                                    height={80}
                                    src="https://res.cloudinary.com/dmquwnaeb/image/upload/v1699348006/djdxpr83alzs27l9rzhg.png"
                                    alt="image"
                                    className="rounded-full border-2 border-[#bd7634]"
                                />
                                <p className="text-xl font-semibold text-center">{item.name}</p>

                            </Link>
                        </div>
                    ))}
                </div>
                {visible && <ChevronRight onClick={slideRight} className="opacity-50 hover:opacity-100 cursor-pointer" size={40}/>}
            </div> 
        </div>
     );
}
 
export default ShopCategoryList;