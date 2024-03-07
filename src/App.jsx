import "./styles/index.scss";
import { HomePage } from "./pages/HomePage";
import { useState } from "react";
import { CartModal } from "./components/modal/CartModal";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

function App() {
  const localCartList = localStorage.getItem("@CARTLIST");

  const [isVisible, setVisible] = useState(false);
  const [cartList, setCartList] = useState(
    localCartList ? JSON.parse(localCartList) : []
  ); 
  const [count, setCount] =  useState(0);
  
    

    const addCart = (prodForAdd) => {
      const hasCart = cartList.some(
        (product) => product.id === prodForAdd.id
      );

        if(!hasCart){
          setCount((count) => count +1)
          setCartList([...cartList, prodForAdd]);
          toast.success("Adicionado ao Carrinho");
        } else{
          toast.error("Já adicionado ao carrinho")
        }

    };


    const removeCart = (productId) => {
      const newCart = cartList.filter((cart) => cart.id !== productId);
      setCartList(newCart)
      setCount((count) => count -1)
      toast.success("Item removido com sucesso!");
    };

    const removeAll = () => {
      setCartList([])
      setCount(0)
    };

    useEffect(() => { 
      localStorage.setItem("@CARTLIST",JSON.stringify(cartList))
        const reading = localStorage.getItem("@CARTLIST");
          setCount((JSON.parse(reading)).length);
    } , [cartList]);


  return (
    <>
      <HomePage 
      addCart={addCart}
      setVisible={setVisible} 
      count={count}
      />
      
      {isVisible ? (
      <CartModal 
      setVisible= {setVisible} 
      cartList={cartList}
      addCart={addCart}
      removeCart= {removeCart}
      removeAll= {removeAll}
      /> 
      ) : null}
      < ToastContainer position="top-right"  autoClose={2* 1000}/> 
    </>
  );
};


export default App
