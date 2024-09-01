import { publicAxios } from "../urlconfig/baseurl";

const RegisterController=(obj)=>{
    return publicAxios.post('/user/signup',obj);
}
const LoginController=(obj)=>{
    return publicAxios.post('/user/login',obj);
}

export {RegisterController,LoginController};