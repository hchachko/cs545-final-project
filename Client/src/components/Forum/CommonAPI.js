import axios from 'axios';
import {baseURL} from './actions/forum';

const masterKey = process.env.REACT_APP_NODEBB_MASTER_TOKEN;

const auth = {
    "Authorization": "Bearer " + masterKey
};

export const getCategories = async () => {
    const res = await axios.get(`${baseURL}/api/categories`, {

    });
    return res.data;
}

export const getTopics = async ({ cid }, { name }, { page } = {page: 1}) => {
    const res = await axios.get(`${baseURL}/api/category/${cid}/${name}?page=${page}`);
    return res.data;
}

export const getPosts = async ({ tid }, { name }, { page } = {page: 1}) => {
    const res = await axios.get(`${baseURL}/api/topic/${tid}/${name}?page=${page}`);
    return res.data;
}

export const getOrCreateUser = async ({ username }, { email }) => {
    const exists = await axios.get(`${baseURL}/api/user/email/${email}?_uid=1`, {
        validateStatus: (num) => {
            return true;
        },
        headers: auth
    });
    if (exists.status == 404) {
        let res = await axios.request({
            url: baseURL + "/api/v3/users/",
            method: "POST",
            headers: auth,
            data: {
                _uid: 1,
                username: username,
                password: "nadkjIADJjp1451h)p*@##*$)^DIFOPA38**",
                email: email
            },
            validateStatus: (num) => {
                return true;
            }
        });
        if (res.status != 200){
            console.log(`Error creating forum proxy user: ${res.data.status.code}, ${res.data.status.message}`)
        } else {
            let res2 = await axios.request({
                url: baseURL + `/api/v3/users/${res.data.response.uid}/emails/${email}/confirm`,
                method: "POST",
                headers: auth,
                data: {
                    _uid: 1
                }
            })
            return res.data.response
        }
    } else { 
        return exists.data
    }
}

export const createTopic = async ({ name }, { post }, { cid }, { user }) => {
    console.log(user._delegate.displayName)
    const bbuser = await getOrCreateUser({username: user._delegate.displayName}, {email: user._delegate.email});
    const res = await axios.request({
        url: baseURL + "/api/v3/topics/",
        method: "POST",
        headers: auth,
        data: {
            _uid: bbuser.uid,
            cid: cid,
            title: name,
            content: post,
            tags: ["content"]
        },
        validateStatus: (num) => {
            return true;
        }
    });
    if(res.status != 200){
        throw new axios.AxiosError(res.data.status.message)
    }
}