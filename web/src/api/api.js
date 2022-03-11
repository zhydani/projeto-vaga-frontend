import axios from 'axios'; //Optei por utilizar a lib (biblioteca) axios por ser mais simples do que a nativa fetch

const api = axios.create({
    baseURL: 'https://kitsu.io/api/edge/'
});

export default api;