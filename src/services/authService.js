
import axios from "axios";


export const logInUser = async (payload) => {

    try {
        const response = await axios.post("https://dummyjson.com/auth/login", payload);
        return response.data;
    } catch (error) {

        throw error;
    }
}