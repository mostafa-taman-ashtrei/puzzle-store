"use client";

import { Ghost, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import CartItem from "./components/CartItem";
import Container from "@/components/general/Container";
import OrderSummary from "./components/OrderSummary";
import useCart from "@/hooks/useCart";

export const revalidate = 0;

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    useEffect(() => { setIsMounted(true); }, []);

    if (!isMounted) return null;


    return (
        <div className="">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <ShoppingBag size={40} />

                        <h1 className="text-3xl font-bold text-center">
                            Cart
                        </h1>
                    </div>

                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && <p className="text-neutral-500 flex flex-col gap-3 items-center justify-center">
                                <Ghost size={50} />
                                Your cart is a ghost town ... start adding some items now.
                            </p>}

                            <ul>
                                {cart.items.map((item) => <CartItem key={item.id} data={item} />)}
                            </ul>
                        </div>

                        <OrderSummary />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CartPage;