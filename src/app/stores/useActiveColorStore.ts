import { create } from "zustand";
import { activeColorStoreInterface } from "../types/activeColorInterface";

export const useActiveColorStore = create<activeColorStoreInterface>(() => ({
    activeColor: "red",
}));
