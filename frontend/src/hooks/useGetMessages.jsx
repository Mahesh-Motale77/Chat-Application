import axios from 'axios';
import React, { useEffect } from 'react'

const useGetMessages = () => {
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8080/api/v4/message/6631ea8c365b148537faacd0`);
            } catch (error) {
                console.log(error);
            }
        }
        fetchMessages();
    }, [])
}

export default useGetMessages
