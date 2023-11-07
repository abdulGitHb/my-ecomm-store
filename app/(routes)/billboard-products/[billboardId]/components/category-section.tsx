import getBillboard from "@/actions/get-billboard";
import getCategory from "@/actions/get-category";
import { Category } from "@/types";
import CategoryList from "./category-list";

interface CategorySectionProps{
    item:Category;
}

const CategorySection:React.FC<CategorySectionProps> = async ({item}) => {

    const category = await getCategory(item.id);
    console.log("productsss", category.products);

    return ( 
        <div>
            <div className="relative z-10 px-4 sm:px-6 lg:px-8">
                <CategoryList title={category.name} items={category}/>
            </div>
        </div>
     );
}
 
export default CategorySection;