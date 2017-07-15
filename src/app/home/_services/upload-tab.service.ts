import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
// models
import {ErrorResponse, GeneralResponse} from "../../_models/generalresponse";
// import constants
import {API_BASE_USER_URL} from "../../_models/constants";
import {EventCreatorEditor, EventMaster} from "../_models/event";
// define constants
const GET_ALL_EVENTS: string = API_BASE_USER_URL + "getAllEvents";
@Injectable()
export class UploadTabService {

  constructor(private http: Http) {
  }

  /**
   * /api/getAllEvents
   * @returns {Observable<any>}
   */
  getAllEvents(): Observable<any> {

    return this.http.get(GET_ALL_EVENTS)
      .map((res: Response) => {
        let response = res.json()["response"];
        let events: EventMaster[] = [];
        console.log(response);
        response.forEach(x => {
          events.push(
            new EventMaster(x["_id"], x["eventName"], x["eventDescription"], x["eventDate"], x["eventImageUrl"],
              new EventCreatorEditor(x["created"]["by"], x["created"]["timeStamp"]),
              new EventCreatorEditor(x["edited"]["by"], x["edited"]["timeStamp"])));
        });
        return new GeneralResponse(events, "true");
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
