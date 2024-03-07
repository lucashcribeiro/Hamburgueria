import style from "./style.module.scss";

export const ProductCard = ({ product, addCart }) => {
    return(
        <div className="container">
        <li className={style.cardList}>
            <img src={product.img} alt={product.name} />
            <div className={style.boxCard}>
                <h3 className="title third">{product.name}</h3>
                <span className="caption">{product.category}</span>
                <span className="body body-600">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => addCart(product)} className="btn small" >Adicionar</button>
            </div>
        </li>
        </div>
    );
};