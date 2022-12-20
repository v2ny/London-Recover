// import { MongoClient, ServerApiVersion } from 'mongodb';

// const MongoDBURI: string = 'mongodb+srv://secure-mongo:GjxpDWEgMVBjIED4@london.kmdbzjm.mongodb.net/?retryWrites=true&w=majority';
// const MongoDBClient: MongoClient = new MongoClient(MongoDBURI, { keepAlive: true, serverApi: ServerApiVersion.v2 })
// const dateInformation: Date = new Date();

// const londonChannelsDB = MongoDBClient.db('london-channels');
// const informationCollection = londonChannelsDB.collection('information');

// const ConnectToMongoDB = async ( ) => {
//     MongoDBClient.connect(err => {
//         if(err) console.error(err)
//         else {
//             console.log(`[${dateInformation.getMonth() + 1}/${dateInformation.getDate()}/${dateInformation.getFullYear()}] Connected with MongoDB Successfully, Database Name: London, Server Name: London-Channels`);
//         }
//     });
// }; 

// export {
//     ConnectToMongoDB,
//     informationCollection
// };