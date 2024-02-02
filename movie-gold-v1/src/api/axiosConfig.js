import axios from "axios";

export default axios.create({
    baseURL: 'https://cf08-117-195-22-18.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});