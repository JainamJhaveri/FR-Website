import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
// material module
import {MyMaterialModule} from "../my-material/my-material.module";
// routing module
import {LoginRegisterRoutingModule} from "./login-register-routing.module";
// shared modules
import {SharedModule} from "../shared/shared.module";
// base component
import {BaseComponent} from "./__base/base.component";
// components
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
// services
import {AuthService} from "./_services/auth.service";
import {SharedService} from "./_services/shared.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MyMaterialModule,
    LoginRegisterRoutingModule
  ],
  declarations: [BaseComponent, LoginComponent, RegisterComponent],
  providers: [AuthService, SharedService]
})
export class LoginRegisterModule {
}
