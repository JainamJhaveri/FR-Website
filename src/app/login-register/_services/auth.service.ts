import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
// import constants
import {API_BASE_USER_URL} from "../../_models/constants";

import {UserLogin, UserRegister} from "../_models/user-auth";
import {GeneralResponse} from "../../_models/generalresponse";

// define URL constants
const REGISTER_STUDENT_URL = API_BASE_USER_URL + "signup";
const LOGIN_STUDENT_URL = API_BASE_USER_URL + "login";

@Injectable()
export class AuthService {

  // Resolve HTTP using the constructor
  constructor(private http: Http) {
  }

  /**
   * This method calls post request /api/digits
   *
   * @param digitsAuthObject
   * @returns {Observable<GeneralResponse>}
   */

  /**
   * This method calls POST request /api/signup
   *
   * @returns {Observable<GeneralResponse>}
   * @param studentRegisterObject
   */
  registerUser(studentRegisterObject: UserRegister): Observable<GeneralResponse> {
    let bodyString = JSON.stringify(studentRegisterObject); // Stringify payload
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers}); // Create a request option

    return this.http.post(REGISTER_STUDENT_URL, bodyString, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * This method calls POST request /api/login
   *
   * @returns {Observable<GeneralResponse>}
   * @param userLogin
   */
  loginUser(userLogin: UserLogin): Observable<GeneralResponse> {
    let bodyString = JSON.stringify(userLogin); // Stringify payload
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers}); // Create a request option

    return this.http.post(LOGIN_STUDENT_URL, bodyString, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


}
