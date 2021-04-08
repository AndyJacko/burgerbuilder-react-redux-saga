import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://burger-builder-e77d0-default-rtdb.firebaseio.com/'
});

export default instance;