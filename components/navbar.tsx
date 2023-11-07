import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import logoWebMain from "../public/logo-website-main2.svg"

import Link from "next/link";
import Image from "next/image";

export const revalidate=0;

const Navbar =async ()=>{

    const categories = await getCategories();

    return (
        <div className=" border-b">
            <Container>
                <div className="relative px-2 sm:px-4 lg:px-4 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <Image
                            src={logoWebMain}
                            alt="logo"
                            width={140}/>
                    </Link>
                    <MainNav data={categories}/>
                    <NavbarActions/>
                </div>
            </Container>
        </div>
    )
}

export default Navbar;