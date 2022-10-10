import axios from 'axios';

const url = 'http://localhost:5000/contact'; //WHEN DEPLOY INTO INTERNET, CHANGE URL TO HEROKU URL

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);
