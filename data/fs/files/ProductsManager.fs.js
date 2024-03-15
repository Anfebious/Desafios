const fs = require("fs")
const crypto = require("crypto")
class ProductManagerFs {
    constructor() {
        this.products = []
        this.path = "./products.json"
        this.init()
    }
    init() {
        const exists = fs.existsSync(this.path)
        if (!exists) {
            fs.writeFileSync(this.path, JSON.stringify([]))
            console.log("El archivo fue creado")
        } else {
            console.log("El archivo ya existe")
        }
        this.products = fs.readFileSync(this.path, "utf-8") 
        this.products = JSON.parse(this.products)
    }
    addProduct(data) {
        if (!data.title || !data.price || !data.photo || !data.category || !data.stock) {
            throw Error("Falta completar algunos campos");
        }
        const product = {
            id: crypto.randomBytes(12).toString("hex"),
            title: data.title,
            price: data.price,
            photo: data.photo,
            category: data.category,
            stock: data.stock,
        };
        this.products.push(product)
        fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2))
    }
    getProducts() {
        return this.products
    }
    getProductsById(id) {
        const product = this.products.find(product => {
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
            const products = this.products.filter(product => {
                return product.id !== deleteProduct.id
            })
            this.products = products
            fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2))
            return deleteProduct
        } catch (error) {
            throw Error("Failed to remove product: " + error.message)
        }
    }
}

const products = new ProductManagerFs();

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

//Este test solo funciona si se copia y pega un ID del archivo, ya que estos son aleatorios.
console.log("Test de getProductsById")
try {
    console.log(products.getProductsById("d9e62612bb80965345ac09aa"))
} catch (error) {
    console.log(error.message)
}

console.log("Test de error en getProductsById")
try {
    products.getProductsById("50000")
} catch (error) {
    console.log(error.message)
}

console.log("Test de getProducts")
console.log(products.getProducts());

console.log("Test de removeProductsById")
try {
    console.log(products.removeProductsById("50209bfc29536b867909ee71"))
} catch (error) {
    console.log(error.message)
}

console.log("Test de error en removeProductsById")
try {
    console.log(products.removeProductsById("50209bfc29536b867909ee71"))
} catch (error) {
    console.log(error.message)
}

console.log("Verificar que se borro el ID")
console.log(products.getProducts());