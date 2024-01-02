import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [userLogged, setUserLogged] = useState(false);
    const [loading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo) {
            setUserLogged(true);
        }
    }, [])

    const loginUser = async (inputValue) => {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValue)
        });
        const data = await response.json();
        console.log(data);
        localStorage.setItem('userInfo', JSON.stringify(data))
        navigate('/')
        setUserLogged(true);
    };

    const logoutUser = () => {
        setUserLogged(false);
        localStorage.clear();
        navigate('/login')
    }

    return {userLogged, loading, loginUser, logoutUser}

}
export default useAuth;