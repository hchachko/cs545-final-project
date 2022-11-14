const dbConnection = require('../config/mongoConnection');
const data = require('../data');
const parks = data.parks;
console.log(data);

let { ObjectId } = require('mongodb');
async function main() {
    const db = await dbConnection.dbConnection();
    await db.dropDatabase();
    //SCHEMA: (parkName, parkImg, parkDesc)
    await parks.addPark("Sample Park Test","https://cdn.britannica.com/82/117982-050-D4295893/Frank-Sinatra-Park-Hoboken-NJ.jpg", "Sample Description");
    await parks.addPark("Sample Park Test 2","https://cdn.britannica.com/82/117982-050-D4295893/Frank-Sinatra-Park-Hoboken-NJ.jpg", "Sample Description");
    console.log('Done seeding database');
    await dbConnection.closeConnection();
}

main();