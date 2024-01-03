import api from "./api";

const loginUserApi = (userValues) =>
    api.post('/auth/login', userValues)
        .then((response) => {
            console.log('Response:', response);
            return response;
        })
        .catch((err) => {
            console.error('Erro na chamada', err);
            throw err; 
        });

const registerUser = (addUserValues) =>
        api.post('/usuario/create', addUserValues)
        .then((response) => {
            console.log('Response:', response);
            return response;
        })
        .catch((err) => {
            console.error('Erro na chamada', err);
            throw err; 
        });
const getUserById = (idUser) =>
        api.get(`/usuario/findById/${idUser}`)
        .then((response) => {
            console.log('Response:', response);
            return response;
        })
        .catch((err) => {
            console.error('Erro na chamada', err);
            throw err; 
        });

export {loginUserApi, registerUser, getUserById};