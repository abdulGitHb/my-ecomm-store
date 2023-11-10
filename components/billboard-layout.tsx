"use client"
import { Billboard as BillboardType } from "@/types";
import { useRouter } from "next/navigation";

interface BillboardProps {
    data: BillboardType;
}

const BillboardLayout: React.FC<BillboardProps> = ({ data }) => { 

    const router = useRouter();

    const handleClick = () =>{
        router.push(`/billboard-products/${data.id}`)
    }

    console.log(data, "inside billboard");
    return (
        <div className="p-2 sm:p-3 lg:p-4 rounded-xl overflow-hidden ">
            <div onClick={handleClick} className="rounded-xl relative cursor-pointer aspect-[2.8/1] overflow-hidden bg-cover"
            style={{backgroundImage: `url(${data?.imageUrl})`}}>
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-lg sm:text-5xl lg:text-6xl sm:max-w-lg max-w-xs">
                        {data.label}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BillboardLayout;