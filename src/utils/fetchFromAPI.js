import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50',
        regiosCode: 'BR',
        
    },
    headers: {
        'X-RapidAPI-Key': 'c28e2c9f76msh3a8c6a2a5a54e34p10a70bjsn3d68c1f8100f',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};