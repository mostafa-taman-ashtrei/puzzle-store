import { Product } from "@/types/store";
import { create } from "zustand";

interface PreviewModalStore {
    isOpen: boolean;
    data?: Product;
    // eslint-disable-next-line no-unused-vars
    onOpen: (data: Product) => void;
    onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ isOpen: true, data }),
    onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;