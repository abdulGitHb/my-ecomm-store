"use client"
import { Product } from "@/types";
import NoResult from "@/components/ui/no-results";
import ProductCard from "./ui/product-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProductListProps{
    title: string; 
    items: Product[];
}

const ProductList: React.FC<ProductListProps> =({title, items})=>{

    const [visible, setVisible] = useState(false);
    const slideLeft = () => {
        let slider:any = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        let slider:any = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };
      if(items.length>=6){
        setVisible(true);
      }

    return(
        <>
            <div className="space-y-4">
                <h3 className="font-bold text-3xl">{title}</h3>
            </div>
                {items.length===0 && <NoResult/>}
            <div className="relative flex items-center w-full">
                {visible && <ChevronLeft onClick={slideLeft} className="opacity-50 hover:opacity-100 cursor-pointer" size={40}/>}
                <div id='slider'
                    className='w-full h-full overflow-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {items.map((item)=>(
                        <div key={item.id} className="w-[230px] inline-block p-2">
                            <ProductCard key={item.id} data={item}/>
                        </div>
                    ))}
                </div>
                {visible && <ChevronRight onClick={slideRight} className="opacity-50 hover:opacity-100 cursor-pointer" size={40}/>}
            </div> 
        </>

    )
}

export default ProductList;