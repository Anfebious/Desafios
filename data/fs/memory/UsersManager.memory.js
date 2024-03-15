class UsersManagerMemory {
    static quantity = 0;
    static #users = [];
    addUser(data) {
        if (!data.email || !data.photo || !data.password || !data.role) {
            throw Error("Falta completar algunos campos");
        }
        const user = {
            id:
                UsersManagerMemory.quantity === 0
                    ? 1
                    : UsersManagerMemory.#users[UsersManagerMemory.quantity - 1].id + 1,
            email: data.email,
            photo: data.photo,
            password: data.password,
            role: data.role,
        };
        UsersManagerMemory.#users.push(user) && UsersManagerMemory.quantity++;
    }
    getUsers() {
        return UsersManagerMemory.#users;
    }
    getUsersById(id) {
        const user = UsersManagerMemory.#users.find(user => {
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
            const deleteUser = this.getUsersById(id)
            const users = UsersManagerMemory.#users.filter(user => {
                return user !== deleteUser
            })
            UsersManagerMemory.#users = users
            return deleteUser
        } catch (error) {
            throw Error("Failed to remove user: " + error.message)
        }
    }
}

const users = new UsersManagerMemory();

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

console.log("Test de getUsersById")
try {
    console.log(users.getUsersById(1))
} catch (error) {
    console.log(error.message)
}

console.log("Test de error en getUsersById")
try {
    users.getUsersById(50000)
} catch (error) {
    console.log(error.message)
}

console.log("Test de getUsers")
console.log(users.getUsers());

console.log("Test de removeUsersById")
try {
    console.log(users.removeUsersById(2))
} catch (error) {
    console.log(error.message)
}

console.log("Test de error en removeUsersById")
try {
    console.log(users.removeUsersById(2))
} catch (error) {
    console.log(error.message)
}

console.log("Verificar que se borro el ID 2")
console.log(users.getUsers());

