import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';
import {API_URL} from '../constants';

export default function useAuth() {

    let history = useHistory();
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState(null);

    //set user in context and push them home
    const setUserContext = async () => {
    return await axios.get(`${API_URL}/medic/login`).then(res => {
        setUser(res.data.currentUser);
        history.push('/home');
        }).catch((err) => {
        setError(err.response.data);
    })
    }

    const registerUser = async (data) => {

        const { username, email, password, country, gender } = data;
        return axios.post(`auth/register`, {
        username, email, password, country, gender
        }).then(async () => {
            await setUserContext();
        }).catch((err) => {
            setError(err.response.data);
        })
    };

    //login user
    const loginUser = async (data) => {
        const { username, password } = data;
        return axios.post(`auth/login`, {
            username, password
            }).then(async () => {
                await setUserContext();
            }).catch((err) => {
                setError(err.response.data);
            })
    };
    return {
    registerUser,
    loginUser,
    error
    }
}
