import Logo from "../../assets/MaskGroup.png";
import { MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss";

export const Header = ({ setVisible, count }) => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.box}>
          <img src={Logo} alt="Logo Kenzie Burguer" />
          <button onClick={() => setVisible(true)}>
            <MdShoppingCart size={21} />
            <span>{count}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
