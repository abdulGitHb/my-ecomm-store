"use client"
import { Product } from "@/types";
import NoResult from "@/components/ui/no-results";
import FeatureProdCard from "./ui/feature-prodcard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface FeatureProdListProps{
    title: string; 
    items: Product[];
}

const FeatureProdList: React.FC<FeatureProdListProps> =({title, items})=>{

    const [visible, setVisible] = useState(true);
    const slideLeft = () => {
        let slider:any = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        let slider:any = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };
      

    return(
        <>
            <div className="space-y-4">
                <h3 className="font-bold text-red-300 text-3xl">{title}</h3>
            </div>
                {items.length===0 && <NoResult/>}
            <div className="relative flex items-center w-full">
                {visible && <ChevronLeft onClick={slideLeft} className="opacity-50 hover:opacity-100 cursor-pointer" size={40}/>}
                <div id='slider'
                    className='flex w-full h-full overflow-x-scroll overflow-scroll scroll scroll-smooth scrollbar-hide'>
                    {items.map((item)=>(
                        <div key={item.id} className="w-[260px] sm:w-[480px] h-[425px] sm:h-[215px] inline-block p-2">
                            <FeatureProdCard key={item.id} data={item}/>
                        </div>
                    ))}
                </div>
                {visible && <ChevronRight onClick={slideRight} className="opacity-50 hover:opacity-100 cursor-pointer" size={40}/>}
            </div> 
        </>

    )
}

export default FeatureProdList;