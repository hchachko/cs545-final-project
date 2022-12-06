const dbConnection = require('../config/mongoConnection');
const data = require('../data');
const parks = data.parks;
console.log(data);

let { ObjectId } = require('mongodb');
async function main() {
    const db = await dbConnection.dbConnection();
    await db.dropDatabase();
    //SCHEMA: (parkName, parkImg, parkDesc)
    await parks.addPark("Church Square Park","https://www.hobokengirl.com/wp-content/uploads/2021/07/Church-Square-Park.png", "400 Garden St, Hoboken, NJ 07030");
    await parks.addPark("Elysian Park","https://topbrunchspots.com/wp-content/uploads/2022/05/AF1QipPiq3Rcn3TOTnVRrgwNWX15to9pldO2RaP8KXv4w1600-h1000-k-no.jpeg", "1001 Hudson St, Hoboken, NJ 07030");
    await parks.addPark("Harborside Park","https://tapinto-production.s3.amazonaws.com/uploads/articles/im/best_crop_013fabf079d51d3a8e7c_image-4.jpg?id=4458372", "1501 Park Ave, Hoboken, NJ 07030");
    await parks.addPark("Maxwell Park","https://cdn.businessyab.com/assets/uploads/ce5c0b46c5cbba9d0045c5a20f494b92__united_states_new_jersey_hudson_county_hoboken_sinatra_drive_north_11th_maxwell_place_park_83841.jpg", "11TH Sinatra Dr N, Hoboken, NJ 07030");
    await parks.addPark("1600 Park","https://patch.com/img/cdn/users/715072/2013/07/raw/ed065af26c849e6f0205869374c1c6ab.jpg", "1600 Park Ave, Hoboken, NJ 07030");
    await parks.addPark("Southwest Park","https://www.starrwhitehouse.com/wp-content/uploads/2018/04/SWPark18.jpg", "58 Jackson St, Hoboken, NJ 07030");
    await parks.addPark("Stevens Park","https://patch.com/img/cdn/users/69916/2011/10/raw/c2194d60b5261ed89326c05b1f7ff8c4.jpg", "Hudson St, Hoboken, NJ 07030");
    await parks.addPark("Viaduct Park","https://cdn.centraljersey.com/wp-content/uploads/sites/18/2018/11/45F9_12hobviaduct21_1.jpg", "1333 Madison St, Hoboken, NJ 07030");
    console.log('Done seeding database');
    await dbConnection.closeConnection();
}

main();