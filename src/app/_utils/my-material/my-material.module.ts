import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule, MdInputModule,
  MdOptionModule,
  MdSelectModule,
  MdToolbarModule
} from "@angular/material";


@NgModule({
  imports: [CommonModule, MdButtonModule, MdCheckboxModule, MdSelectModule, MdOptionModule, MdDialogModule, MdCardModule,
    MdToolbarModule, MdInputModule],
  exports: [MdButtonModule, MdCheckboxModule, MdSelectModule, MdOptionModule, MdDialogModule, MdCardModule,
    MdToolbarModule, MdInputModule]
})
export class MyMaterialModule {
}
