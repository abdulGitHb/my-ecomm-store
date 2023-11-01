"use client"

import Image from "next/image"
import {Tab} from "@headlessui/react"

import { Image as ImageType } from "@/types"
import GalleryTab from "./gallery-tab";


interface GalleryProps{
    images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({images}) =>{
    return (
        <Tab.Group as="div" className="flex flex-col-reverse m-auto">
            <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-6 gap-6">
                    {images.map((image) =>(
                        <GalleryTab key={image.id} image={image}/>
                    ))}
                </Tab.List>
            </div>

            <Tab.Panels className="aspect-square m-auto w-[320px] sm:w-[390px] md:w-[460px]">
                {images.map((image) =>(
                    <Tab.Panel key={image.id}>
                        <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                            <Image
                                fill src={image.url}
                                alt="Image"
                                className="object-cover object-center"/>
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

export default Gallery;