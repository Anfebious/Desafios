const fs = require("fs")
const crypto = require("crypto")
class UsersManagerFs {
    constructor() {
        this.users = []
        this.path = "./files/users.json"
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
        this.users = fs.readFileSync(this.path, "utf-8") 
        this.users = JSON.parse(this.users)
    }
    addUser(data) {
        if (!data.email || !data.password || !data.photo || !data.role) {
            throw Error("Falta completar algunos campos");
        }
        const user = {
            id: crypto.randomBytes(12).toString("hex"),
            email: data.email,
            photo: data.photo,
            password: data.password,
            role: data.role,
        };
        this.users.push(user)
        fs.writeFileSync(this.path, JSON.stringify(this.users, null, 2))
    }
    getUsers() {
        return this.users
    }
    getUsersById(id) {
        const user = this.users.find(user => {
            return user.id === id
        })
        if (!user) {
            throw Error("ID not found")
        } else {
            return user
        }
    }
    removeUsersById(id) {
        try {
            const deleteuser = this.getUsersById(id)
            const users = this.users.filter(user => {
                return user.id !== deleteuser.id
            })
            this.users = users
            fs.writeFileSync(this.path, JSON.stringify(this.users, null, 2))
            return deleteuser
        } catch (error) {
            throw Error("Failed to remove user: " + error.message)
        }
    }
}

const users = new UsersManagerFs();

try {
    users.addUser({ email: "test@gmail.com", photo: "C://Users/Desktop", password: "changeMe1234", role: "admin" });
} catch (error) {
    console.log(error.message)
}

try {
    users.addUser({ email: "test@hotmail.com", photo: "C://Users/Desktop", password: "changeIt1234", role: "moderator" });
} catch (error) {
    console.log(error.message)
}

try {
    users.addUser({ email: "test@yahoo.com", photo: "C://Users/Desktop", password: "changeIt1234", role: "user" });
} catch (error) {
    console.log(error.message)
}

try {
    users.addUser({ email: "test2@hotmail.com", photo: "C://Users/Desktop", password: "changeMe1234", role: "moderator" });
} catch (error) {
    console.log(error.message)
}

console.log("Test de error en addUser")
try {
    users.addUser({});
} catch (error) {
    console.log(error.message)
}

//Este test solo funciona si se copia y pega un ID del archivo, ya que estos son aleatorios.
console.log("Test de getUsersById")
try {
    console.log(users.getUsersById("07c0103625ce6149e5bcb482"))
} catch (error) {
    console.log(error.message)
}

console.log("Test de error en getUsersById")
try {
    users.getUsersById("50000")
} catch (error) {
    console.log(error.message)
}

console.log("Test de getUsers")
console.log(users.getUsers());

console.log("Test de removeUsersById")
try {
    console.log(users.removeUsersById("5fb3ef9232136bfcb493dab5"))
} catch (error) {
    console.log(error.message)
}

console.log("Test de error en removeUsersById")
try {
    console.log(users.removeUsersById("5fb3ef9232136bfcb493dab5"))
} catch (error) {
    console.log(error.message)
}

console.log("Verificar que se borro el ID 2")
console.log(users.getUsers());

