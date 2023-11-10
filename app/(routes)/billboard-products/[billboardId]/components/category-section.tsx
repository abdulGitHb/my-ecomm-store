import getBillboard from "@/actions/get-billboard";
import getCategory from "@/actions/get-category";
import { Category } from "@/types";
import CategoryList from "./category-list";
import getProducts from "@/actions/get-products";

interface CategorySectionProps{
    item:Category;
    colorId: string;
    sizeId: string;
}

const CategorySection:React.FC<CategorySectionProps> = async ({item, colorId, sizeId}) => {

    const category = await getCategory(item.id);
    const products = await getProducts({
        categoryId: item.id,
        colorId,
        sizeId,
    });
    console.log("productsss", category.products);

    return ( 
        <div>
            <div className="relative z-10 px-4 sm:px-6 lg:px-8">
                <CategoryList title={category.name} items={products}/>
            </div>
        </div>
     );
}
 
export default CategorySection;