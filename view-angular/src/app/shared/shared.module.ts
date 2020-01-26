import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  TextValueAccessorDirective
} from './directives/control-value-accessors';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TextValueAccessorDirective
  ],
  entryComponents: [

  ],
  exports: [
    FormsModule,
    TextValueAccessorDirective
  ]
})
export class SharedModule {

}
