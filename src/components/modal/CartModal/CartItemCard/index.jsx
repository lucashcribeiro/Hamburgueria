import { MdDelete } from "react-icons/md";
import style from "./style.module.scss";

export const CartItemCard = ({ product, removeCart }) => {
  const { id, img, name } = product;

  return (
    <li>
      <div className={style.boxCartModal}>
        <img src={img} alt={name} />
        <div className={style.containerDescription}>
        <div className={style.descriptionModal}>
          <h3 className="title third">{name}</h3>
          <span className="body body-600">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        
          <button
            onClick={() => removeCart(id)}
            aria-label="delete"
            title="Remover item"
          >
            <MdDelete size={21} />
          </button>
          </div>
      </div>
    </li>
  );
};
