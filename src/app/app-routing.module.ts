/**
 * Created by jainamjhaveri on 09/05/17.
 */

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
// feature modules
import {LoginRegisterModule} from "./login-register/login-register.module";
import {NotFoundComponent} from "./not-found/not-found.component";
import {HomeModule} from "./home/home.module";

export function loadLoginRegisterModule() {
  return LoginRegisterModule;
}

export function loadHomeModule() {
  return HomeModule;
}


const routes: Routes = [
  {
    path: '',
    // loadChildren: loadLoginRegisterModule
    loadChildren: 'app/login-register/login-register.module#LoginRegisterModule'
  },
  {
    path: 'home',
    // loadChildren: loadHomeModule
    loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
