import AsyncStorage from '@react-native-async-storage/async-storage';

const storeDataLocally = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(`Error while storing ${key} in Async Storage`);
  }
};

const getDataFromLocalStore = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    // console.log(`Value from Key: ${key} is ${jsonValue}`)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(`Error while reading ${key} from Async Storage`);
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log('Done.');
};

//Storing AuthToken
export const storeAuthToken = (token) => {
  storeDataLocally('@letshare:userJWTToken', token);
};
//Retrieving AuthToken
export const retrieveAuthToken = async (tokenHandler) => {
  const token = await getDataFromLocalStore('@letshare:userJWTToken');

  setTimeout(() => {
    tokenHandler(token);
  }, 500);
};
