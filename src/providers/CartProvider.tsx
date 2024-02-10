import { CartItem, PizzaSize, Product } from "@/src/types/types";
import { Children, PropsWithChildren, createContext, useState } from "react";

interface CartProviderType{
    items : CartItem[],
    addItem : Function
}

export const CartContext = createContext<CartProviderType>({
    items : [] ,
    addItem : () => {}
})

export const CartProvider = ({ children} : PropsWithChildren) => {
    const [items , setItems] = useState<CartItem[]>([]);

    const addItem = ( product : Product , size : PizzaSize ) => {
        const newItem : CartItem = {
            id : '1' ,
            product_id : product.id,
            product : product ,
            size ,
            quantity : 1
        }

        setItems([...items,newItem])
    }

    return <CartContext.Provider value={{  items , addItem}}>
        {children}
    </CartContext.Provider>
}