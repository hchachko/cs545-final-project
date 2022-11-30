require("dotenv").config({path: '.secrets'});
const axios = require("axios");

const baseURL='http://127.0.0.1:4567/api';
const masterKey = process.env.REACT_APP_NODEBB_MASTER_TOKEN;

const checkDelete = ["Announcements", "General Discussion", "Comments &amp; Feedback", "Blogs"];
const auth = {
    "Authorization": "Bearer " + masterKey
};

// Get existing categories to prevent duplication on multiple runs of seed
var categories = [];

const data = require('../data');
const parks = data.parks;
let { ObjectId } = require('mongodb');

async function main() {
    var res = await axios.get(baseURL + "/categories");
    res = res.data
    categories = [];
    while(true){
        for(category of res.categories){
            if(checkDelete.includes(category.name)){
                var a = await axios.request({
                    url: baseURL + "/v3/categories/" + category.cid,
                    method: "DELETE",
                    headers: auth,
                    data: {
                        _uid: 1
                    }
                });
            } else {
                _ = categories.push(category.name);
            };
        };
        if(res.pagination.next.active){
            res = await axios.get(baseURL + "/categories?" + res.pagination.next.qs).data;
        } else {
            break;
        }
    }
    console.log("Done deleting default categories.");
    const listParks = await parks.getAll();
    listParks.sort()
    for(park of listParks){
        if(!categories.includes(park.parkName)){
            _ = await axios.request({
                url: baseURL + "/v3/categories",
                method: "post",
                headers: auth,
                data: {
                    _uid: 1,
                    name: park.parkName,
                    description: park.parkAddress,
                    backgroundImage: park.parkImg,
                }
            });
        };
    };
    console.log("Done creating park categories")
    process.exit()
}

main();