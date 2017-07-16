import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
// material module
import {MyMaterialModule} from "../_utils/my-material/my-material.module";
// routing module
import {HomeRoutingModule} from "./home-routing.module";
// base component
import {BaseComponent} from "./__base/base.component";
// shared module
import {SharedModule} from "../shared/shared.module";
// components
import {AllComponent} from "./all/all.component";
import {UploadPicsComponent} from "./upload-pics/upload-pics.component";
// services
import {UploadTabService} from "./_services/upload-tab.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MyMaterialModule,
    HomeRoutingModule
  ],
  declarations: [BaseComponent, AllComponent, UploadPicsComponent],
  providers: [UploadTabService]
})
export class HomeModule {
}
