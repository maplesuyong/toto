"use strict";

class UserStorage {
    static #users = {
        id: ["suyong0507", "tester1", "tester2"],
        pw: ["111111", "1234", "123456"],
        name: ["박수용", "테스터1", "테스터2"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;