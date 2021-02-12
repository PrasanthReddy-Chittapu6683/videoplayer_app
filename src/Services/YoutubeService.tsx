import axios from 'axios';
const KEY = "AIzaSyCzqS41EKgugCUGk5F2lYwpwrTk6f1UjGA";

export default axios.create({
    // baseURL: 'https://www.googleapis.com/youtube/v3',
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: KEY
    }
})