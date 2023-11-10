
import getBillboard from "@/actions/get-billboard";
import CategorySection from "./components/category-section";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";
import MobileFilters from "./components/mobile-filters";
import Filter from "./components/filter";

interface BillboardCategoryProps{
    params:{
        billboardId:string;
    },
    searchParams:{
        colorId: string;
        sizeId: string;
    }
}
const BillboardProducts:React.FC<BillboardCategoryProps> =async({params, searchParams}) => {

    const billboardId = params.billboardId;
    const billboards = await getBillboard(billboardId);
    const categories = billboards.categories;

    const sizes = await getSizes();
    const colors = await getColors();

    console.log("categoreies", categories);
    
    return ( 
        <div>
            <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="flex flex-col lg:flex-row">

                        {/* Add mobile filters */}
                        <MobileFilters sizes={sizes} colors={colors}/>
                        {/* Desktop filters */}
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-3 lg:col-span-4 lg:mt-0">
                            {categories && categories.map((category)=>(
                                <CategorySection key={category.id} item={category} 
                                    colorId={searchParams.colorId}
                                    sizeId={searchParams.sizeId}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            
        </div>
     );
}
 
export default BillboardProducts;