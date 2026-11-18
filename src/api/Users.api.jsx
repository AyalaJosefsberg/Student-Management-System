import axios from "axios";
const url = "https://dummyjson.com/users";

export const getUsers = async () => {
    const res= await axios.get(url);
    return res.data.users;
};
export const getUserById = async (id) => {
    const res= await axios.get(`${url}/${id}`);
    return res.data;
}