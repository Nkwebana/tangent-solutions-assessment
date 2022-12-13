import axios from 'axios';
import { ApiCall, ApiResponse } from '../interfaces';

const getRandomNumber = () => {
  return Math.floor(Math.random() * Math.floor(10));
};

const generateUniqueId = () => {
  const firstRandomNumber = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
  const secondRandomNumber = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
  const firstLetter = String.fromCharCode(firstRandomNumber).toUpperCase();
  const secondLetter = String.fromCharCode(secondRandomNumber).toUpperCase();

  return `${firstLetter}${secondLetter}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`;
};

export const handleApiError = (error: Error): ApiResponse => ({
  ok: false,
  result: null,
  error,
});

const handleApiSuccess = (result: object): ApiResponse => ({
  ok: true,
  result,
  error: undefined,
});

const calculateRem = (size: number): string => `${(size / 16) * 1}rem`;

const makeApiCall = async (params: ApiCall): Promise<ApiResponse> => {
  try {
    const { data: response } = await axios({
      ...params,
      headers: {
        accepts: 'application/json',
      },
    });

    if (params.callBack) {
      params.callBack.apply(response);
    }

    return handleApiSuccess(response);
  } catch (error: any) {
    return handleApiError(error);
  }
};

export { calculateRem, makeApiCall, generateUniqueId };
