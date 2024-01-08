"use client";

import { useEffect, useState } from "react";

import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";
import ThemeTogglerButton from "./ThemeTogglerButton";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => { setIsMounted(true); }, []);


    if (!isMounted) return null;

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button
                onClick={() => router.push("/cart")}
                className="flex items-center rounded-lg px-4 py-2"
            >
                <ShoppingBag size={20} />
                <span className="ml-2 text-sm font-medium">
                    5
                </span>
            </Button>
            <ThemeTogglerButton />
        </div>
    );
};

export default NavbarActions;