import { useEffect, useState } from "react";
import { getCart, updateToCart, removeItem } from "@api/CartApi";
import '@styles/Cart.scss';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const data = await getCart();
                setCart(data);
            } catch (error) {
                console.error(`Error al obtener el carrito: ${error}`);
            }
        };

        fetchCart();
    }, []);

    const handlerIncrease = async (prod) => {
        const newQty = prod.qty + 1;
        setCart((prev) => prev.map((p) => (p.id === prod.id ? { ...p, qty: newQty } : p)));

        try {
            await updateToCart(prod.id, newQty);
        } catch (error) {
            console.error(`Error al actualizar la cantidad: ${error}`);
        }
    };

    const handlerDecrease = async (prod) => {
        if (prod.qty === 1) return;
        const newQty = prod.qty - 1;
        setCart((prev) => prev.map((p) => (p.id === prod.id ? { ...p, qty: newQty } : p)));

        try {
            await updateToCart(prod.id, newQty);
        } catch (error) {
            console.error(`Error al actualizar la cantidad: ${error}`);
        }
    };

    const handlerDelete = async (id) => {
        try {
            await removeItem(id);
            setCart((prev) => prev.filter((item) => item.id !== id));
        } catch (error) {
            console.error(`Error al eliminar el producto: ${error}`);
        }
    };

    return (
        <>
            {cart.map((product) => (
                <div key={product.id}>
                    <h3>{product.nombre}</h3>
                    <p>Cantidad: {product.qty}</p>
                    <span className="material-symbols-outlined" onClick={() => handlerIncrease(product)}>
                        add_circle
                    </span>
                    <span className="material-symbols-outlined" onClick={() => handlerDecrease(product)}>
                        remove
                    </span>
                    <span className="material-symbols-outlined" onClick={() => handlerDelete(product.id)}>
                        delete
                    </span>
                </div>
            ))}
        </>
    );
};

export default Cart;