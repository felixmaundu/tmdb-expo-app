import { API_KEY } from "../utils/Config";


export const getNowPlaying = async url => {
    const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
    
    let response = await fetch(
      API_URL,
       {
         method: 'GET'
        } 
      );
    response = response.json();
    return response;
};

export const getUpcoming = async url => {
  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
  
  let response = await fetch(
    API_URL,
     {
       method: 'GET'
      } 
    );
  response = response.json();
  return response;
};

