import { createContext, useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (prod) => {
    const exist = cart.some((product) => product.id === prod.id);
    if (exist) {
      const newCart = cart.map((product) => {
        if (product.id === prod.id) {
          return { ...prod, quantity: prod.quantity + product.quantity };
        } else {
          return product;
        }
      });
      setCart(newCart);
      toast.success(`${prod.title} actualizado en el carrito`);
    } else {
      setCart([...cart, prod]);
      toast.success(`${prod.title} agregado al carrito`);
    }
  };

  const removeById = (prod) => {
    const newCart = cart.filter((product) => product.id !== prod.id);
    setCart(newCart);
    toast.success(`${prod.title} eliminado del carrito`);
  };

  const clearCart = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Se vaciará el carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire({
          icon: "success",
          title: "Carrito vacio",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const finalizePurchase = () => {
    setCart([]);
  };

  const getTotalAmount = () => {
    const total = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    const total = cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return total;
  };

  const data = {
    cart,
    addToCart,
    removeById,
    clearCart,
    getTotalAmount,
    getTotalQuantity,
    finalizePurchase,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
