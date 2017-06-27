import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdOptionModule,
  MdSelectModule
} from "@angular/material";


@NgModule({
  imports: [CommonModule, MdButtonModule, MdCheckboxModule, MdSelectModule, MdOptionModule, MdDialogModule, MdCardModule],
  exports: [MdButtonModule, MdCheckboxModule, MdSelectModule, MdOptionModule, MdDialogModule, MdCardModule]
})
export class MyMaterialModule {
}
