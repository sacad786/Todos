import Axios from "axios";

export function getUsers() {
    return Axios.get("http://localhost:8080/api/user")
}

// export function createUsers(user) {
//     return Axios.post("http://localhost:8080/api/user/", user)
// }

// export function updateUsers(userId, user) {
//     return Axios.put(`http://localhost:8080/api/user/${userId}`, user)
// }

// export function deleteUsers(userId) {
//     return Axios.delete(`http://localhost:8080/api/user/${userId}`)
// }