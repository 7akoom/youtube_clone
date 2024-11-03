import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    // 'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-key': 'be620b5189msh8816dd32c925fd5p12ad06jsn1a1c07df3839',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}