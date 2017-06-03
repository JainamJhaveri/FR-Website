import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {LoginRegisterRoutingModule} from "./login-register-routing.module";
import {BaseComponent} from "./__base/base.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
// services
import {AuthService} from "./_services/auth.service";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LoginRegisterRoutingModule
  ],
  declarations: [BaseComponent, LoginComponent, RegisterComponent],
  providers: [AuthService]
})
export class LoginRegisterModule {
}
