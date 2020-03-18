import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  TextValueAccessorDirective
} from './directives/control-value-accessors';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TextValueAccessorDirective
  ],
  entryComponents: [

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TextValueAccessorDirective
  ]
})
export class SharedModule {

}
