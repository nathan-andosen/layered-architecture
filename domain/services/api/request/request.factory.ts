import { BaseRequest } from './base-request.service';
import { DummyRequestService } from './dummy-request.service';
import { AjaxRequestService } from './ajax-request.service';
import { DIBaseFactory } from '../../dependency-injection.service';


export class RequestFactory extends DIBaseFactory {
  serviceName = 'ApiRequestService';

  create(): BaseRequest {
    const dummyEnv = true;
    if (dummyEnv) return new DummyRequestService();

    // return default
    return new AjaxRequestService();
  }

}
