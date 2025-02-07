import axios from 'axios';

const URI = 'http://localhost:8080/api/v1';

const get = async (endpoint) => {
    try {
        const url = URI.concat(endpoint);

        return await axios.get(url);
    } catch(err) {
        console.error(err);
        return null;
    }
}

const post = async (endpoint, request) => {

    try {
        const url = URI.concat(endpoint);

        return await axios.post(url,request);
    } catch(err) {
        console.error(err);
        return null;
    }
}

const put = async (endpoint,request) => {
    try {
        const url = URI.concat(endpoint);

        return await axios.put(url,request);
    } catch(err) {
        console.error(err);
        return null;
    }
}

const remove = async (endpoint) => {

    try {
        const url = URI.concat(endpoint);

        return await axios.delete(url);
    } catch(err) {
        console.error(err);
        return null;
    }
}

const Base = { get, put, post, remove }

export default Base;
