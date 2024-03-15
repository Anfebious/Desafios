class UsersManager {
    static quantity = 0;
    static #users = [];
    addUser(data) {
        if (!data.email || !data.photo || !data.password || !data.role) {
            throw Error("Falta completar algunos campos");
        }
        const user = {
            id:
                UsersManager.quantity === 0
                    ? 1
                    : UsersManager.#users[UsersManager.quantity - 1].id + 1,
            email: data.email,
            photo: data.photo,
            password: data.password,
            role: data.role,
        };
        UsersManager.#users.push(user) && UsersManager.quantity++;
    }
    getUsers() {
        return UsersManager.#users;
    }
}

const users = new UsersManager();

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

console.log("Test de getUsers")
console.log(users.getUsers());
