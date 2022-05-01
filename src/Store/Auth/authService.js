import axios from "axios";


const register = async (data) => {
    const response = await axios.post("http://20.102.58.86:8080/v1/register/web3:8080", data)
    console.log(response)
}
const authService = {
    register
}

export default authService