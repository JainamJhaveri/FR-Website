import { Injectable } from '@angular/core';
import {UserLogin} from "../_models/user-auth";
import {Subject} from "rxjs/Subject";

@Injectable()
export class SharedService {

  constructor() { }

  private _loginDetailsSource = new Subject<UserLogin>();

  loginDetails$ = this._loginDetailsSource.asObservable();


  announceSetLoginDetails(userLogin: UserLogin) {
    this._loginDetailsSource.next(userLogin);

  }

}
