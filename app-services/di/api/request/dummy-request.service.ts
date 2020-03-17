import { BaseRequest } from './base-request.service';
import { API_ENDPOINTS } from '../api.constants';
import { IApiResponse } from '../api.interfaces';

export class DummyRequestService extends BaseRequest {

  get(): void {

  }

  post(endpoint: string, requestData: any): Promise<IApiResponse> {
    if (endpoint === API_ENDPOINTS.USER_SIGNIN) {
      return userSigninResponse(requestData);
    }

  }
}



const userSigninResponse = (requestData) => {
  if (requestData.username === 'demo' && requestData.password === 'demo') {
    return Promise.resolve({
      success: true
    } as IApiResponse);
  } else {
    return Promise.reject({
      success: false,
      errors: ['Incorrect username or password, please try again.']
    } as IApiResponse);
  }
};
