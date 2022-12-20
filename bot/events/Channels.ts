import { informationCollection } from "./ConnectDatabase";

const categoryId: string = '1042848714043166730';
const dateInformation: Date = new Date();
const ParentCategoryId: string = categoryId;
console.log(`[${dateInformation.getMonth() + 1}/${dateInformation.getDate()}/${dateInformation.getFullYear()}] Parent Category Id: '${ParentCategoryId}'`);

export {
    ParentCategoryId
};