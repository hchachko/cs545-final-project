const mongoCollections = require('../config/mongoCollections');
const parks = mongoCollections.parks;
const collect = require('collect.js');
let { ObjectId } = require('mongodb');

const exportedMethods = {
    async getAll(){
        const parkCollection = await parks();
        let parkList = await parkCollection.find({}).toArray();
        parkList = collect(parkList);
        if (parkList.length == 0) throw 'No more parks avaliable to show';
        for (let x of parkList) {
            x['_id'] = x['_id'].toString();
        } 
        return parkList;
    },

    async get(id){
        if (arguments.length != 1) throw "Usuage: get(id)";
        if (typeof id != 'string') throw "Non-string input detected";
        id = id.trim();
        if (id.length == 0) throw "Empty string input detected";
        if (!ObjectId.isValid(id)) throw "id is not a valid Object ID";
        const parkCollection = await parks();
        const park = await parkCollection.findOne({ _id: ObjectId(id) });
        if (park === null) throw 'No sweet with that id';
        park['_id'] = park['_id'].toString();
        return park;
    },

    async addPark(parkName, parkImg, parkAddress) {
        if (arguments.length != 3) throw 'Usage: addPark(parkName, parkImg, parkDesc)';

        const parkCollection = await parks();
        const newPark = {
            _id: new ObjectId(),
            parkName: parkName,
            parkImg: parkImg,
            parkAddress: parkAddress
        };
        const insertInfo = await parkCollection.insertOne(newPark);
        if (insertInfo.insertedCount === 0) throw "Could not add park";
        const newId = insertInfo.insertedId;
        const park = await this.get(newId.toString());
        return park;
    }
};

module.exports = exportedMethods;