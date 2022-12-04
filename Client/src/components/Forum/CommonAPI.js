import axios from 'axios';
import {baseURL} from './actions/forum';

export const getTopics = async ({ cid }, { name }) => {
    const res = await axios.get(`${baseURL}/api/category/${cid}/${name}`);
    return res.data;
}

export const getCategories = async () => {
    const res = await axios.get(`${baseURL}/api/categories`);
    return res.data;
}

export const getPosts = async ({ tid }, { name }) => {
    const res = await axios.get(`${baseURL}/api/topic/${tid}/${name}`);
    return res.data;
}