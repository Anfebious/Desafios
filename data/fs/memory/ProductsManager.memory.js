class ProductManagerMemory {
    static quantity = 0;
    static #products = [];
    addProduct(data) {
        if (!data.title || !data.price || !data.photo || !data.category || !data.stock) {
            throw Error("Falta completar algunos campos");
        }
        const product = {
            id:
                ProductManagerMemory.quantity === 0
                    ? 1
                    : ProductManagerMemory.#products[ProductManagerMemory.quantity - 1].id + 1,
            title: data.title,
            price: data.price,
            photo: data.photo,
            category: data.category,
            stock: data.stock,
        };
        ProductManagerMemory.#products.push(product) && ProductManagerMemory.quantity++;
    }
    getProducts() {
        return ProductManagerMemory.#products;
    }
    getProductsById(id) {
        const product = ProductManagerMemory.#products.find(product => {
            return product.id === id
        })
        if (!product) {
            throw Error("ID not found")
        } else {
            return product
        }
    }
    removeProductsById(id) {
        try {
            const deleteProduct = this.getProductsById(id)
            const products = ProductManagerMemory.#products.filter(product => {
                return product !== deleteProduct
            })
            ProductManagerMemory.#products = products
            return deleteProduct
        } catch (error) {
            throw Error("Failed to remove product: " + error.message)
        }
    }
}

const products = new ProductManagerMemory();

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

console.log("Test de getProductsById")
try {
    console.log(products.getProductsById(1))
} catch (error) {
    console.log(error.message)
}

console.log("Test de error en getProductsById")
try {
    products.getProductsById(50000)
} catch (error) {
    console.log(error.message)
}

console.log("Test de getProducts")
console.log(products.getProducts());

console.log("Test de removeProductsById")
try {
    console.log(products.removeProductsById(2))
} catch (error) {
    console.log(error.message)
}

console.log("Test de error en removeProductsById")
try {
    console.log(products.removeProductsById(2))
} catch (error) {
    console.log(error.message)
}

console.log("Verificar que se borro el ID 2")
console.log(products.getProducts());

