
import axios from "axios";


export const logInUser = async (payload) => {

    await axios.post("https://dummyjson.com/auth/login", payload).then((res) => (res)).catch((error) => (console.log(error)))

}