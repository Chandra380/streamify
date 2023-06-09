import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'bbb026e5b9msh17a2030b58c3cc6p130af1jsn168e120c7918',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    console.log(process.env.REACT_APP_RAPID_API_KEY)
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};