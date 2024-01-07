import Container from "../general/Container";
import Link from "next/link";
import NavRoutes from "./NavRoutes";
import NavbarActions from "./NavbarActions";
import getCategories from "@/actions/getCategories";

const Navbar = async () => {
    const categories = await getCategories();

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">Puzzle</p>
                    </Link>
                    <NavRoutes data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
};

export default Navbar;