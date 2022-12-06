import axios from 'axios';
import { ApiCall, ApiResponse } from '../interfaces';

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

export { calculateRem, makeApiCall };
