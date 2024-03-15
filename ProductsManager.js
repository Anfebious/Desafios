class ProductsManager {
    static quantity = 0;
    static #products = [];
    addProduct(data) {
        if (!data.title || !data.price || !data.photo || !data.category || !data.stock) {
            throw Error("Falta completar algunos campos");
        }
        const product = {
            id:
                ProductsManager.quantity === 0
                    ? 1
                    : ProductsManager.#products[ProductsManager.quantity - 1].id + 1,
            title: data.title,
            price: data.price,
            photo: data.photo,
            category: data.category,
            stock: data.stock,
        };
        ProductsManager.#products.push(product) && ProductsManager.quantity++;
    }
    getProducts() {
        return ProductsManager.#products;
    }
}

const products = new ProductsManager();

try {
    products.addProduct({ title: "Curso de Tortas Modernas", price: 10000, photo: "C://Users/Desktop", category: "Tortas", stock: 100 });
} catch (error) {
    console.log(error.message)
}

try {
    products.addProduct({ title: "Curso de Tortas Exoticas", price: 12000, photo: "C://Users/Desktop", category: "Tortas", stock: 100 });
} catch (error) {
    console.log(error.message)
}

try {
    products.addProduct({ title: "Curso de Tortas Clasicas", price: 12000, photo: "C://Users/Desktop", category: "Tortas", stock: 100 });
} catch (error) {
    console.log(error.message)
}

try {
    products.addProduct({ title: "Curso de Postres Clasicos", price: 11000, photo: "C://Users/Desktop", category: "Postres", stock: 100 });
} catch (error) {
    console.log(error.message)
}

try {
    products.addProduct({ title: "Curso de Postres Modernos", price: 10000, photo: "C://Users/Desktop", category: "Postres", stock: 100 });
} catch (error) {
    console.log(error.message)
}

try {
    products.addProduct({ title: "Curso de Tartas Saladas", price: 9000, photo: "C://Users/Desktop", category: "Tartas", stock: 100 });
} catch (error) {
    console.log(error.message)
}

try {
    products.addProduct({ title: "Curso de Tartas Clasicas", price: 9500, photo: "C://Users/Desktop", category: "Tartas", stock: 100 });
} catch (error) {
    console.log(error.message)
}

try {
    products.addProduct({ title: "Curso de Bomboneria", price: 15000, photo: "C://Users/Desktop", category: "Chocolateria", stock: 100 });
} catch (error) {
    console.log(error.message)
}

try {
    products.addProduct({ title: "Curso de Huevos de Pascua", price: 15000, photo: "C://Users/Desktop", category: "Chocolateria", stock: 100 });
} catch (error) {
    console.log(error.message)
}

try {
    products.addProduct({ title: "Curso de Chocolateria Profesional", price: 20000, photo: "C://Users/Desktop", category: "Chocolateria", stock: 100 });
} catch (error) {
    console.log(error.message)
}


console.log("Test de error en addProduct")
try {
    products.addProduct({});
} catch (error) {
    console.log(error.message)
}

console.log("Test de getProducts")
console.log(products.getProducts());
