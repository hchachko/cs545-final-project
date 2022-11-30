import axios from 'axios';
import {baseURL} from './actions/forum';

export const getTopics = async ({ cid },{ name }) => {
    console.log(`${baseURL}/api/category/${cid}/${name}`);
    const res = await axios.get(`${baseURL}/api/category/${cid}/${name}`);
    return res.data;
}