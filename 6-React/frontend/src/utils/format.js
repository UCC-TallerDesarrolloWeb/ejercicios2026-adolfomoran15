

/**
 * Formatea el precio 
 * @method formatPrice
 * @param {number} price - precio del producto
 */
export const formatPrice = (price) => {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS"
    }).format(price);
}