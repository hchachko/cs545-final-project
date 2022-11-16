const dbConnection = require('../config/mongoConnectionNodeBB');

let { ObjectId } = require('mongodb');
async function main() {
    const db = await dbConnection.dbConnection();
    db.
    // Just need to make sure it exists. Don't clear existing data.
    console.log('Done creating nodebb database');
    await dbConnection.closeConnection();
}

main();