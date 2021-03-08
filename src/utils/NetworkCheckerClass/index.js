import NetInfo from '@react-native-community/netinfo';
// export default class NetworkUtils {
//   static async isNetworkAvailable() {
//     const response = await NetInfo.fetch();
//     return response.isConnected;
//   }
// }

export const checkNetworkStatus = (handleIsConnected) => {
  NetInfo.addEventListener((state) => {
    //   console.log('Connection type', state.type);
    //   console.log('Is connected?', state.isConnected);
    if (handleIsConnected) {
      handleIsConnected(state.isConnected);
    }
  });
};
