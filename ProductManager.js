class ProductManager {
    static quantity = 0;
    static #products = [];
    addProduct(data) {
        if (!data.titulo || !data.descripcion || !data.precio || !data.thumbnail || !data.codigo || !data.stock) {
            console.log("Falta completar algunos campos");
        } else {
            if (this.validateDuplicate(data.codigo)) {
                console.log("Codigo duplicado");
            } else {
                const product = {
                    id:
                        ProductManager.quantity === 0
                            ? 1
                            : ProductManager.#products[ProductManager.quantity - 1].id + 1,
                    titulo: data.titulo,
                    descripcion: data.descripcion,
                    precio: data.precio,
                    thumbnail: data.thumbnail,
                    codigo: data.codigo,
                    stock: data.stock,
                };
                ProductManager.#products.push(product) && ProductManager.quantity++;
            }
        }
    }
    getProducts() {
        return ProductManager.#products;
    }
    getProductsById(id) {
        const product = ProductManager.#products.find(product => {
            return product.id === id
        })
        if (!product) {
            console.log("ID not found");
        }else {
            return product
        }
    }
    validateDuplicate(codigo) {
        return ProductManager.#products.some(product => {
            return product.codigo === codigo
        })
    }
}

const products = new ProductManager();
products.addProduct({ titulo: "Curso de Tortas Modernas", descripcion: "Curso para elaborar tortas con tecnicas modernas", precio: 10000, thumbnail: "C://Users/Desktop", codigo: "AAA001", stock: 100 });
products.addProduct({ titulo: "Curso de Tortas Clasicas", descripcion: "Curso para elaborar tortas con tecnicas clasicas", precio: 12000, thumbnail: "C://Users/Desktop", codigo: "AAA002", stock: 100 });
products.addProduct({ titulo: "Curso de Tortas Clasicas", descripcion: "Curso para elaborar tortas con tecnicas clasicas", precio: 12000, thumbnail: "C://Users/Desktop", codigo: "AAA002", stock: 100 });
products.addProduct({});

console.log(products.getProductsById(1))
products.getProductsById(50000)

console.log(products.getProducts());