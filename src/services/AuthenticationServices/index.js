import {doGet, doPost, doPostWithTokenResponse} from '../../utils/AxiosMethods';

export const checkUserEmail = async (email, emailExistHandler) => {
  const data = {email: email};

  const checkEmailV1Url = 'v1/users/checkEmail';

  try {
    const checkEmailResponse = await doPost(checkEmailV1Url, data);
    // console.log('Checking Email Response', checkEmailResponse);
    if (checkEmailResponse.errorMessage) {
      emailExistHandler(false);
    } else {
      emailExistHandler(checkEmailResponse.data.userExists);
    }
  } catch (err) {
    emailExistHandler(false);
  }
};

export const authorizeUser = async (credentials) => {
  const authV1Url = 'v1/auth';

  try {
    const authResponse = await doPostWithTokenResponse(authV1Url, credentials);
    // console.log('Checking Auth Response', authResponse);
    return authResponse;
  } catch (err) {}
};