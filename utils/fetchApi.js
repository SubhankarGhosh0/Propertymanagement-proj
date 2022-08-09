import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '406858d833msh008fe434db9a9fbp1d4e96jsn5437997ba4db',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });
    
  return data;
}