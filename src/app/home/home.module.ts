import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {HomeRoutingModule} from "./home-routing.module";
import {BaseComponent} from "./__base/base.component";
import {SharedModule} from "../shared/shared.module";
import {AllComponent} from "./all/all.component";
import {UploadPicsComponent} from "./upload-pics/upload-pics.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [BaseComponent, AllComponent, UploadPicsComponent]
})
export class HomeModule {
}
