
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"

// import {useState} from "react";
import Image from "next/image";
import billboardVector from "../../public/Vector 1.svg"
import billboardVector2 from "../../public/Vector 2.svg"
import billVec3 from "../../public/top-vec-new.svg"
import BillboardSlider from "@/components/billboard-slider";
import getCategories from "@/actions/get-categories";
import ShopCategoryList from "@/components/shop-categ-list";

export const revalidate =0;

const HomePage = async() =>{

    const products = await getProducts({ isFeatured: true });

    const billboards = await getBillboards();

    const categories = await getCategories();
    
    return (
        <>
            <BillboardSlider items={billboards}/>
            <Image className="" src={billVec3} alt="" />
        <Container>
            <div className="pb-10 font-serif">

                <div className="gap-y-8 px-4 sm:px-6 lg:px-8">
                    <div className="mt-3">
                        <h1 className="text-3xl font-bold">SHOP BY CATEGORY</h1>
                        <ShopCategoryList items={categories}/>
                    </div>
                </div>
            
                <div className="mt-4 relative z-10 px-4 sm:px-6 lg:px-8">
                    <ProductList title="FEATURED PRODUCTS" items={products}/>
                    {/* <Image className="" src={billboardVector2} alt="" /> */}
                </div>

                <div className="gap-y-8 px-4 sm:px-6 lg:px-8">
                    <div>
                        <ProductList title="CUPS & MUGS" items={products}/>
                    </div>
                    {/* <Image className="" src={billboardVector} alt="" /> */}
                </div>

                <div className="gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="JUGS & GLASSES" items={products}/>
                </div>

                <div>
                    Random customer reviews will be added here
                </div>
            </div>
        </Container>
    </>
    )
}

export default HomePage;