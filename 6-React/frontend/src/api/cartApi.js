const BASE_URL = import.meta.env.VITE_BASE_URL;

// Obtener listado de PRODUCTOS
export async function getProducts() {
    const res = await fetch(`${BASE_URL}products`);

    if (!res.ok) throw new Error("Error al obtener el listado de productos");

    return res.json();
}

// Obtener el listado de productos en el carrito
export async function getCart() {
    const res = await fetch(`${BASE_URL}cart`);

    if (!res.ok) throw new Error("Error al obtener el listado de cart");

    return res.json();
}

// Agregar un producto al Carrito
export async function addToCart(product) {
    const cart = await getCart();

    const existingItem = cart.find(item => String(item.productId) === String(product.id));

    if (existingItem) {
        // ACTUALIZAR CANTIDAD DE PRODUCTO
        return updateToCart(existingItem.id, existingItem.qty + 1);
    }

    const { id: productId, ...productData } = product;
    const newItem = {
        ...productData,
        productId,
        qty: 1,
    };

    const res = await fetch(`${BASE_URL}cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
    });

    if (!res.ok) throw new Error("Error al guardar el producto en el carrito");

    return res.json();
}

// ACTUALIZAR CANTIDAD DE PRODUCTO
export async function updateToCart(itemId, qty) {
    if (qty < 1) {
        throw new Error("Error la cantidad de productos no puede ser inferior a 1");
    }

    const res = await fetch(`${BASE_URL}cart/${itemId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ qty }),
    });

    if (!res.ok) throw new Error("Error al actualizar la cantidad de productos en carrito");

    return res.json();
}

//Eliminar producto de carrito

export async function removeItem(itemId) {
    const res = await fetch(`${BASE_URL}cart/${itemId}`, {
        method: "DELETE"
    });
    if (!res.ok) throw new Error("Error al eliminar un producto")

    return true
}