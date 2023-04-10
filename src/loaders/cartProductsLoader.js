import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart data is in database, we've to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    // console.log(products);
    // return products;
    return savedCart;

    // if we've to return more than one variable, we've to use them inside an array or object
    // return products savedCart; no
    // option 1: return [products, savedCart] yes
    // option 2: return {products, savedCart} yes
    // option 3: return {item: products, cart: savedCart} yes
}
export default cartProductsLoader;