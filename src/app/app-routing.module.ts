/**
 * Created by jainamjhaveri on 09/05/17.
 */

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

// feature modules
import {LoginRegisterModule} from "./login-register/login-register.module";

export function loadLoginRegisterModule() { return LoginRegisterModule; }


const routes: Routes = [
  {
    path: '',
    loadChildren: loadLoginRegisterModule
    // loadChildren: 'app/login-register/login-register.module#LoginRegisterModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
