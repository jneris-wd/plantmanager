// json-server ./src/services/server.json --host 192.168.0.5 --port 3333

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.5:3333',
});

export default api;