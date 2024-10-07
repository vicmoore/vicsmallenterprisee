import { Databases, ID, Query } from 'appwrite';

import { account, client } from '@/appwriteconfig';

const database = new Databases(client);

const Database_ID = '6636974f0001f7636c25';
const Products_Collection_ID = '664a48fe002b8da43289';
const User_Collection_ID = '664a44d00012a65504ef';

/*
  CREATE USER

  This adds a newly created user to the user collection
*/
export const createUser = async (userInfo: any) => {
  try {
    await database.createDocument(
      Database_ID,
      User_Collection_ID,
      ID.unique(),
      {
        email: userInfo.email,
        first_name: userInfo.firstName,
        last_name: userInfo.lastName,
        phone_number: `${userInfo.phoneNo ? userInfo.phoneNo : null}`,
        password: userInfo.password1,
        user_role: userInfo.userRole,
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const getUserDetails = async () => {
  try {
    let response = await account.get();

    const name = response.name.split(' ');
    const firstName = name[0];
    const lastName = name[1];

    const email = response.email;

    return {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
  } catch (error) {
    console.error(error);
  }
};

/*
GETS PRODUCTS
*/
export const getProducts = async () => {
  try {
    let response = await database.listDocuments(
      Database_ID, // databaseId
      Products_Collection_ID // collectionId
      //[Query.contains('name', ['watch'])] // queries (optional)
    );
    return response.documents;
  } catch (error) {
    console.error(error);
  }
};

/*
SEARCH PRODUCTS
*/
export const searchProducts = async (searchQuery: string) => {
  const searchQueryArray = searchQuery.split(' ');
  try {
    let response = await database.listDocuments(
      Database_ID, // databaseId
      Products_Collection_ID, // collectionId
      [Query.contains('name', searchQueryArray)] // queries
    );
    return response.documents;
  } catch (error) {
    console.error(error);
  }
};

/*
GETS PRODUCT BY ID
*/
export const getProductById = async (id: string) => {
  try {
    let response = await database.getDocument(
      Database_ID, // databaseId
      Products_Collection_ID, // collectionId
      id
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

/*
GETS PRODUCTS BY CATEGORY
*/
export const getProductsByCategory = async (category: string) => {
  try {
    let response = await database.listDocuments(
      Database_ID, // databaseId
      Products_Collection_ID, // collectionId
      [Query.equal('category', category)] // queries
    );
    return response.documents;
  } catch (error) {
    console.error(error);
  }
};

/*
GETS USERS ADDRESSES
*/
export const getUserAddresses = async (id: string) => {
  try {
    let response = await database.getDocument(
      Database_ID, // databaseId
      User_Collection_ID, // collectionId
      id
    );
    return response.address;
  } catch (error) {
    console.error(error);
  }
};
