import { create } from 'zustand';

import { Product } from '@/types';
import { persist, createJSONStorage } from 'zustand/middleware';
import toast from 'react-hot-toast';

interface FavouriteStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useFavourite = create(
  persist<FavouriteStore>((set, get)=>({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id);

      if(existingItem){
        return toast("Item already in the list!");
      }

      set({items: [...get().items, data]});
      toast.success("Item added to Favourite💖!");
    },

    removeItem: (id: string) => {
      set({items: [...get().items.filter((item) => item.id !== id)]});
      toast.success("Item removed from Favourite!");
    },

    removeAll: ()=> set({items: []}),
  }), {
    name: "favourites-storage",
    storage: createJSONStorage(()=> localStorage)
    })
);

export default useFavourite;