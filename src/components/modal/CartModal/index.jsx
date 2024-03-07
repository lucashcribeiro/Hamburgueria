import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss";

export const CartModal = ({ cartList, setVisible, removeAll, removeCart,  }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={style.dialog}>
         <div className={style.boxModal}>
         <div className={style.headerModal} >
            <h2 className="title third">Carrinho de compras</h2>
            <button onClick={() => setVisible(false)}
             aria-label="close" 
             title="Fechar">
               <MdClose size={21} />
            </button>
         </div>
         
         <div className={style.productModal}>
            <ul>
               {cartList.map((product) => (
                  <CartItemCard 
                  key={product.id} 
                  product={product} 
                  
                  removeCart = {removeCart}
                  />
               ))}
            </ul>
            <span className={style.row}></span>
         </div>
         
         <div className={style.boxPrice}>
            <div className={style.boxContainer}>
               <span className="body  body-600 body-600-1">Total</span>
               <span className="body  body-600 body-600-2 ">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <button className="btn large full" onClick={() => removeAll()}>Remover todos</button>
         </div>
         </div>
      </div>
   );
};
