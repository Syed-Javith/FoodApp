import { CartItem, PizzaSize, Product } from "@/src/types/types";
import { Children, PropsWithChildren, createContext, useState } from "react";
import * as Crypto from 'expo-crypto';
interface CartProviderType{
    items : CartItem[],
    addItem : Function,
    updateItem : Function,
    total : number
}

export const CartContext = createContext<CartProviderType>({
    items : [] ,
    addItem : () => {},
    updateItem : () => {},
    total : 0
})

export const CartProvider = ({ children} : PropsWithChildren) => {
    const [items , setItems] = useState<CartItem[]>([]);

    const addItem = ( product : Product , size : PizzaSize ) => {
        const newItem : CartItem = {
            id : Crypto.randomUUID() ,
            product_id : product.id,
            product : product ,
            size ,
            quantity : 1
        }

        setItems([...items,newItem])
    }

    const updateItem = (id : string , quantity : number) => {
        const updated : CartItem[] = items.map((item) => {
           return item.id === id ? {...item , quantity : item.quantity + quantity} : item
        })
        setItems(updated.filter((item) => item.quantity > 0))
    }

    const total = items.reduce((sum , curr ) => sum += curr.product.price * curr.quantity  , 0)

    return <CartContext.Provider value={{  items , addItem , updateItem , total}}>
        {children}
    </CartContext.Provider>
}