import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types/store";
import { create } from "zustand";
import { toast } from "react-hot-toast";

interface CartStore {
    items: Product[];
    // eslint-disable-next-line no-unused-vars
    addItem: (data: Product) => void;
    // eslint-disable-next-line no-unused-vars
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);

            if (existingItem) return toast("Item already in cart.");

            set({ items: [...get().items, data] });
            toast.success("Item added to cart.");
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            toast.success("Item removed from cart.");
        },
        removeAll: () => set({ items: [] }),
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    }));

export default useCart;