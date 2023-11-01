
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"

// import {useState} from "react";
import Image from "next/image";
import billboardVector from "../../public/Vector 1.svg"
import billboardVector2 from "../../public/Vector 2.svg"
// import { ChevronLeft, ChevronRight } from "lucide-react";

export const revalidate =0;

const HomePage = async() =>{

    // const [visible, setVisible] = useState(true);
    // const slideLeft = () => {
    //     let slider:any = document.getElementById('slider');
    //     slider.scrollLeft = slider.scrollLeft - 500;
    //   };
    
    //   const slideRight = () => {
    //     let slider:any = document.getElementById('slider');
    //     slider.scrollLeft = slider.scrollLeft + 500;
    //   };

    const products = await getProducts({ isFeatured: true });

    const billboards = await getBillboard();

    console.log("billboard",billboards);
    console.log("productss",products);
    
    return (
        <Container>
            <div className="pb-10">
                    <div className="relative flex items-center w-full">
                        {/* {visible && <ChevronLeft onClick={slideLeft} className="opacity-50 hover:opacity-100 cursor-pointer" size={35}/>} */}
                        <div id='slider'
                            className='w-full h-full overflow-scroll scroll gap-x-2 whitespace-nowrap scroll-smooth scrollbar-hide'>
                            {billboards.map((item)=>(
                                <div key={item.id} className="w-full inline-block">
                                    <Billboard key={item.id} data={item}/>
                                </div>
                            ))}
                        </div>
                        {/* {visible && <ChevronRight onClick={slideRight} className="opacity-50 hover:opacity-100 cursor-pointer" size={35}/>} */}
                    </div> 
            
                <div className="-mt-6 sm:-mt-10 relative z-10 px-4 sm:px-6 lg:px-8">
                    <Image className="" src={billboardVector} alt="" />
                    
                    <ProductList title="Featured Products" items={products}/>
                    
                    <Image className="" src={billboardVector2} alt="" />

                </div>
                <div className="gap-y-8 px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#EDE5DD]">
                        <ProductList title="Cups & Mugs" items={products}/>
                    </div>
                        <Image className="" src={billboardVector} alt="" />
                </div>
                <div className="gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Jugs & Glasses" items={products}/>
                </div>
            </div>
        </Container>
    )
}

export default HomePage;