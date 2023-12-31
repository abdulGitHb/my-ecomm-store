"use client"
import NoResult from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { Category, Product } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CategoryListProps{
    title: string;
    items: Product[];
}

const CategoryList: React.FC<CategoryListProps> =({items, title}) => {

    const [visible, setVisible] = useState(true);
    const slideLeft = () => {
        let slider:any = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        let slider:any = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };



    return ( 
        <>
        <div className="space-y-4">
            <h3 className="font-bold text-3xl mb-3 mt-3">{title}</h3>
        </div>
        {items.length === 0 && <NoResult/>}
        <div className="relative sm:hidden flex items-center w-full">
                {visible && <ChevronLeft onClick={slideLeft} className="opacity-50 -mr-10 z-20 bg-orange-400 rounded-full hover:opacity-100 cursor-pointer" size={40}/>}
                <div id='slider'
                    className='w-full h-full overflow-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {items.map((item)=>(
                        <div key={item.id} className="w-[230px] inline-block p-2">
                            <ProductCard key={item.id} data={item}/>
                        </div>
                    ))}
                </div>
                {visible && <ChevronRight onClick={slideRight} className="opacity-50 -ml-9 z-20 bg-orange-400 rounded-full hover:opacity-100 cursor-pointer" size={40}/>}
        </div> 
        <div className="hidden sm:block mt-6 lg:col-span-4 lg:mt-0">
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                    {items.map((item)=>(
                            <ProductCard key={item.id} data={item}/>
                    ))}
                </div>
        </div> 
        <hr className="mt-3" />
        </>
     );
}
 
export default CategoryList;