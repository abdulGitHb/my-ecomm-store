"use client"

import { Billboard } from "@/types";
import BillboardLayout from "./billboard-layout";
import { ChevronLeft, ChevronRight } from "lucide-react";


interface BillboardSliderItem{
    items: Billboard[];
}

const BillboardSlider:React.FC<BillboardSliderItem> = ({items}) => {

    console.log(items, "inside billboard slider");

    const slideLeft = () => {
        let slider:any = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 1200;
    };
        
    const slideRight = () => {
        let slider:any = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 1200;
    };


    return ( 
        <div className="relative flex items-center w-full">
            <ChevronLeft onClick={slideLeft} className="opacity-50 hover:opacity-100 cursor-pointer" size={35}/>
            <div id='slider'
                className='w-full h-full overflow-scroll scroll gap-x-1 whitespace-nowrap scroll-smooth scrollbar-hide'>
                {items.map((item)=>(
                    <div key={item.id} className="w-full inline-block">
                        <BillboardLayout key={item.id} data={item}/>
                    </div>
                ))}
            </div>
            <ChevronRight onClick={slideRight} className="opacity-50 hover:opacity-100 cursor-pointer" size={35}/>
        </div> 
     );
}
 
export default BillboardSlider;