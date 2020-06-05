import Axios from "axios";

export function getUsers() {
    return Axios.get("http://localhost:8080/api/user")
}