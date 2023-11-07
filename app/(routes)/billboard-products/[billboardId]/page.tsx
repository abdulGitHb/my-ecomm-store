
import getBillboard from "@/actions/get-billboard";
import CategorySection from "./components/category-section";

interface BillboardCategoryProps{
    params:{
        billboardId:string;
    };
}
const BillboardProducts:React.FC<BillboardCategoryProps> =async({params}) => {

    const billboardId = params.billboardId;
    const billboards = await getBillboard(billboardId);
    const categories = billboards.categories;

    console.log("categoreies", categories);
    
    return ( 
        <div>
            {categories && categories.map((category)=>(
                <CategorySection key={category.id} item={category}/>
            ))}
        </div>
     );
}
 
export default BillboardProducts;