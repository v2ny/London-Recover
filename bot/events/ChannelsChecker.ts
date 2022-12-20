// import { TextChannel, User } from 'discord.js';
// import moment from 'moment';
// import { client } from '../main';
// import { informationCollection } from './ConnectDatabase';

// const CheckChannels = async ( ) => {
//     const getDate: Date = new Date();
//     const getHDate: number = getDate.getUTCHours();
//     const getMDate: number = getDate.getUTCMinutes();
//     const getSDate: number = getDate.getUTCSeconds();
//     try
//     {
//         informationCollection.find({}, { 
//             projection: {
//                 _id: 0,
//                 user_id: 1,
//                 channel_id: 1,
//                 opened_at: 1,
//             } }).forEach((result) => {
//                 const json: string | any = JSON.parse(JSON.stringify(result));
//                 const datesInValue: string[] = json['opened_at']?.split(':') || [];
//                 if(datesInValue.length !== -1)
//                 {
//                     const user_id   : any = json['user_id'];
//                     const channel_id: string = json['channel_id'];
//                     datesInValue.reverse().shift();
//                     datesInValue.reverse();
//                     const nowTimeInFormated: string = `${getHDate - 12}:${getMDate}:${getSDate}`;
//                     const dbTimeInFormated: string = `${Number(datesInValue[0])}:${Number(datesInValue[1])}:${Number(datesInValue[2])}`;
//                     const expireMomentFormat   = moment(dbTimeInFormated, 'HH:mm:ss').diff(moment(nowTimeInFormated, 'HH:mm:ss'));
//                     const expireMomentDuration = moment.duration(expireMomentFormat);
//                     const leftUntilExpire = moment.utc(expireMomentDuration.as('milliseconds')).format('HH:mm:ss');
//                     const leftUntilExpireArray = leftUntilExpire.split(':');
//                     if((leftUntilExpireArray[0] === '00' && leftUntilExpireArray[1] === '00' && leftUntilExpireArray[2] === '00') || (Number(leftUntilExpireArray[0]) <= 0 && Number(leftUntilExpireArray[1]) <= 0 && Number(leftUntilExpireArray[2]) <= 6))
//                     {
//                         client.users.fetch(user_id, { force: false, cache: false }).then(async (user) => {
//                             return await user.send({
//                                 content: 'تم انتهاء مدة صلاحية رومك، تم فتح الصلاحية لك لإنشاء روم خاص اخر | ✅',
//                                 isUser: true,
//                             }).then(async ( ) => {
//                                 try {
//                                     const channel: TextChannel = (client.channels.cache.find(channel => channel.id === channel_id) as TextChannel);
//                                     // channel.messages.cache.forEach((message) => {
//                                     //     const decodedMessages = `
//                                     //         <div class>
//                                     //     `;
//                                     // })
//                                     await channel.delete('Time of the private room has exceeded.');
//                                     const dateInformation: Date = new Date();
//                                     console.log(`[${dateInformation.getMonth() + 1}/${dateInformation.getDate()}/${dateInformation.getFullYear()}] Removed '${channel_id}' from the database collection!`);
//                                     informationCollection.deleteOne({ user_id: user_id, channel_id: channel_id });
//                                 } catch (error) {
//                                     console.log(error);
//                                 }
//                             });                       
//                         });
//                     }
//                 }
//             });
//     }
//     catch(err)
//     {
//         if(err) console.log(err);
//     }
// };

// export { 
//     CheckChannels
// }