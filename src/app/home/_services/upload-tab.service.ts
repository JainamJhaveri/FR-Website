import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
// models
import {ErrorResponse} from "../../_models/generalresponse";
// import constants
import {API_BASE_USER_URL} from "../../_models/constants";
// define constants
const GET_ALL_EVENTS: string = API_BASE_USER_URL + "getAllEvents";
@Injectable()
export class UploadTabService {

  constructor(private http: Http) {
  }

  getAllEvents(): Observable<any> {

    return this.http.get(GET_ALL_EVENTS)
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      }).catch(err => UploadTabService.handleError(err));

  }

  /**
   * general error handler in case any of the above services fail
   * @param error
   * @returns {Promise<never>}
   */
  public static handleError(error: any): Observable<ErrorResponse> {
    console.error('An error occurred in upload-tab-service');
    console.log(error);
    return new Observable(observer => observer.next(new ErrorResponse(error)));
  }


}
