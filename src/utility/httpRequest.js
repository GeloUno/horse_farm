import axios from 'axios';

export const httpRequest = async (pathUrl, method, data) => {
  const url = process.env.REACT_APP_URL_HOST_SERVER + pathUrl;
  try {
    const httpResponse = await axios({
      method,
      url,
      data,
    });
    return httpResponse.data;
  } catch (error) {
    throw error;
  }
};
